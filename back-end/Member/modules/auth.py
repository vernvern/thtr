# -*- coding=utf-8 -*-

import uuid
import graphene

from django.contrib.auth.hashers import make_password, check_password

from ..models import UserModel
from ..graphene_models import User
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
    user = graphene.Field(lambda: User)
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
