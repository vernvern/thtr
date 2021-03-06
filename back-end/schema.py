# -*- coding=utf-8 -*-

import graphene

# 注册api
import Member.api
import Word.api

from Public.graphene_hepler import Api

api = Api()


Query = type('Query', (graphene.ObjectType, ), api.query)

Mutation = type('Mutation', (graphene.ObjectType, ), api.mutation)

schema = graphene.Schema(query=Query, mutation=Mutation)
