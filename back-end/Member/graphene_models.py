# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType
from Public.graphene_models import BaseObjectType

from .models import UserModel


class RegisterOutUserType(BaseObjectType, DjangoObjectType):
    class Meta:
        model = UserModel
    only_fields = ('email', 'nick_name')


class LoginOutputType(BaseObjectType, DjangoObjectType):
    class Meta:
        model = UserModel
        only_fields = ('email', 'nick_name')
    access_token = graphene.String()


LoginInputType = {
    'email': graphene.String(),
    'password': graphene.String()
}
