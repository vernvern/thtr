# -*- coding=utf-8 -*-

import graphene

import Member.mutation
import Word.mutation

from Member.modules import auth
from Public.graphene_hepler import Api

api = Api()


Query = type('Query', (graphene.ObjectType, ), api.query)

class Mutation(
        Member.mutation.Mutation,
        Word.mutation.Mutation,
        graphene.ObjectType):
    # This class will inherit from multiple Mutations
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
