# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType

from .models import WordModel


class WordType(DjangoObjectType):
    class Meta:
        model = WordModel
