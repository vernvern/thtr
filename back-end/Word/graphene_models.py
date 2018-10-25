# -*- coding=utf-8 -*-

from graphene_django import DjangoObjectType

from .models import WordModel


class Word(DjangoObjectType):
    class Meta:
        model = WordModel

