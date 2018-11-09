# -*- coding=utf-8 -*-


import graphene

from Word.models import WordModel
from .modules import WordList


class Query(graphene.ObjectType):
    pass


Query.words = WordList.words
Query.resolve_words = WordList.resolve_words
