# -*- coding=utf-8 -*-

import graphene

from .modules import auth


class Query(graphene.ObjectType):
    pass


Query.login = auth.Login.login
Query.resolve_login = auth.Login.resolve_login
