# -*- coding=utf-8 -*-


import graphene

from Word.models import WordModel
from . import modules


class Query(graphene.ObjectType):
    pass


Query.words = modules.WordList.words
Query.resolve_words = modules.WordList.resolve_words

Query.word = modules.WordDetail.word
Query.resolve_word = modules.WordDetail.resolve_word
