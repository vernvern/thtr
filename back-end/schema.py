# -*- coding=utf-8 -*-

import graphene

import Member.query
import Word.query
import Member.mutation
import Word.mutation


class Query(Member.query.Query, Word.query.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutation(
        Member.mutation.Mutation,
        Word.mutation.Mutation,
        graphene.ObjectType):
    # This class will inherit from multiple Mutations
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
