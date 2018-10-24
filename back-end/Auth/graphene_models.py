# -*- coding=utf-8 -*-

from graphene_django import DjangoObjectType

from .models import UserModel


class User(DjangoObjectType):
    class Meta:
        model = UserModel
