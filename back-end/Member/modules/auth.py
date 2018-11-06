# -*- coding=utf-8 -*-

import uuid

import graphene
from graphene_django import DjangoObjectType
from django.core.cache import cache
from django.contrib.auth.hashers import make_password, check_password

from ..models import UserModel
from ..graphene_models import RegisterOutUserType
from .. import graphene_models as g_model
from Public.redis_helper import RedisHelper
from Public.graphene_hepler import GrapheneMutation


class Register(GrapheneMutation):
    ''' 注册用户 '''

    class Arguments:
        nick_name = graphene.String()
        password = graphene.String()
        email = graphene.String()
        description = graphene.String()

    # return args
    code = graphene.String()
    user = graphene.Field(lambda: RegisterOutUserType)
    msg = graphene.String()

    # module
    def mutate(self, info, nick_name, password, email, description):
        data = {
            'nick_name': nick_name,
            'password': make_password(password),
            'email': email,
            'description': description
        }
        redis = RedisHelper()
        if not redis.hget('user_email:user_id', email):
            user = UserModel(**data)
            redis.hmset(user.id, user.as_dict())
            redis.hmset('user_email:user_id', {user.email: user.id})
            code = '0'
        else:
            user = None
            code = '1001'
        return Register(user=user, code=code)


class Login:
    login = graphene.Field(g_model.LoginOutputType, **g_model.LoginInputType)

    def resolve_login(self, info, email, password):
        ret = g_model.LoginOutputType()
        redis = RedisHelper()
        use_id = redis.hget('user_email:user_id', email)
        user = redis.hgetall(use_id)
        if not use_id:
            ret.code = '1002'
        elif not check_password(password, user.get('password')):
            ret.code = '1003'
        else:
            ret.email = user.get('email')
            ret.access_token = str(uuid.uuid4())
            cache.set(ret.access_token, use_id, 60 * 60 * 24)  # 生效一小时
        return ret
