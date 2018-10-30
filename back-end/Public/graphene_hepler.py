# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType

from .response_helper import response_code


class GrapheneMutation(graphene.Mutation):
    def __init__(self, *args, **kw):
        if 'code' in kw:
            kw['msg'] = response_code.get(kw['code'], None)
        super().__init__(*args, **kw)

    def mutate(self, *args, **kw):
        super().mutate(*args, **kw)
