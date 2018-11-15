# -*- coding=utf-8 -*-


import graphene

from . import modules


class Mutation(graphene.ObjectType):
    add_word = modules.AddWord.Field()
    edit_word = modules.EditWord.Field()
