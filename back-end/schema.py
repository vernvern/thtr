# -*- coding=utf-8 -*-

import graphene

import Auth.query


class Query(Auth.query.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


schema = graphene.Schema(query=Query)
