# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType

from Public.graphene_hepler import BaseObjectType
from .models import WordModel


class WordType(DjangoObjectType):
    class Meta:
        model = WordModel


WordListInputType = {
    'index': graphene.Int(),
    'size': graphene.Int(),
    'access_token': graphene.String()
}


class WordListOutputType(BaseObjectType, graphene.ObjectType):
    words = graphene.List(WordType)
    total = graphene.Int()
