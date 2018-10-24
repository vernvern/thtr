# -*- coding=utf-8 -*-

import graphene

from .graphene_models import User
from Auth.models import UserModel


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        test = User(account='dsa')
        test1 = User(account='ds1a')
        return [test, test1]
