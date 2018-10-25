# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType

from .models import UserModel


class User(DjangoObjectType):
    class Meta:
        model = UserModel
    removed = graphene.String(required=False)
