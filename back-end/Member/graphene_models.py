# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType
from Public.graphene_hepler import GrapheneDjangoObjectType

from .models import UserModel


class User(GrapheneDjangoObjectType):
    class Meta:
        model = UserModel
    removed = graphene.String(required=False)


class LoginOutputType(GrapheneDjangoObjectType):
    class Meta:
        model = UserModel
        only_fields = ('email', 'nick_name')
    access_token = graphene.String()


LoginInputType = {
    'email': graphene.String(),
    'password': graphene.String()
}
