# -*- coding=utf-8 -*-

import graphene
from graphene_django import DjangoObjectType

from .response_helper import response_code


class GrapheneMutation(graphene.Mutation):
    def __init__(self, *args, **kw):
        if 'code' in kw:
            kw['msg'] = response_code.get(kw['code'], None)
        super().__init__(*args, **kw)

    code = graphene.String()
    msg = graphene.String()

    def mutate(self, *args, **kw):
        super().mutate(*args, **kw)


class BaseObjectType(graphene.AbstractType):

    code = graphene.String(default_value='0')
    msg = graphene.String()

    def __setattr__(self, key, value):
        if key == 'code':
            msg = response_code.get(value, None)
            self.msg = msg
        super().__setattr__(key, value)
