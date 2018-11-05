# -*- coding=utf-8 -*-

import graphene

from .modules import auth


class Mutation(graphene.ObjectType):
    register_user = auth.Register.Field()
