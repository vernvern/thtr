# -*- coding=utf-8 -*-


import graphene

from .graphene_models import Word
from Word.models import WordModel


class Query(graphene.ObjectType):
    words = graphene.List(Word)

    def resolve_words(self, info):
        test = Word(word='dsa')
        test1 = Word(word='ds1a')
        return [test, test1]
