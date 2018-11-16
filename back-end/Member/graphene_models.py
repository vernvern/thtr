# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType
from Public.graphene_hepler import BaseObjectType

from .models import UserModel


class RegisterOutUserType(BaseObjectType, DjangoObjectType):
    class Meta:
        model = UserModel
    only_fields = ('email', 'nick_name')
