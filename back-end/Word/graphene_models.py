# -*- coding=utf-8 -*-

from graphene_django import DjangoObjectType

from .models import WordModel


class AddWordOutputType(DjangoObjectType):
    class Meta:
        model = WordModel
