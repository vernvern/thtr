# -*- coding=utf-8 -*-

import uuid

import arrow
import graphene
from graphene_django import DjangoObjectType
from django.core.cache import cache
from django.contrib.auth.hashers import make_password, check_password

from .models import UserModel
from .graphene_models import RegisterOutUserType
from Public.redis_helper import RedisHelper
from Public.graphene_hepler import GrapheneMutation
from Public.graphene_hepler import Api


api = Api()


@api.register_mutation(api_name='registerUser')
class Register(GrapheneMutation):
    ''' 注册用户 '''

    class Arguments:
        nick_name = graphene.String()
        password = graphene.String()
        email = graphene.String()
        description = graphene.String()

    # return args
    user = graphene.Field(lambda: RegisterOutUserType)

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
            redis.hmset('user:'+user.id, user.as_dict())
            redis.hmset('user_email:user_id', {user.email: user.id})
            code = '0'
        else:
            user = None
            code = '1001'
        return Register(user=user, code=code)


@api.register_query(api_name='login')
class Login:

    class Arguments:
        email = graphene.String()
        password = graphene.String()

    email = graphene.String()
    nick_name = graphene.String()
    access_token = graphene.String()
    expires_in = graphene.Int()

    def query(self, info, email, password):
        ret = Login()
        redis = RedisHelper()
        use_id = redis.hget('user_email:user_id', email)
        user = redis.hgetall('user:'+use_id)
        if not use_id:
            ret.code = '1002'
        elif not check_password(password, user.get('password')):
            ret.code = '1003'
        else:
            ret.email = user.get('email')
            ret.access_token = str(uuid.uuid4())
            expires_seconds = 60 * 60 * 24  # 生效24小时
            ret.expires_in = arrow.now() \
                .shift(seconds=expires_seconds).timestamp
            cache.set(ret.access_token, use_id, expires_seconds)
        return ret
