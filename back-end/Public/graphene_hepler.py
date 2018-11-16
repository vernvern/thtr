# -*- coding=utf-8 -*-

import inspect

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


class Api:
    _singleton = None

    def __new__(cls, *args, **kw):
        if not cls._singleton:
            cls._singleton = object.__new__(cls, *args, **kw)
        return cls._singleton

    query = {}
    mutation = {}

    def register_query(self, api_name):
        assert isinstance(api_name, str)

        def decorator(cls):
            _input = {k: v for k, v in inspect.getmembers(cls.Arguments) if not k.startswith('__')}
            _ouput = {k: v for k, v in inspect.getmembers(cls) if not k.startswith('__') and not inspect.isclass(v) and not inspect.isfunction(v)}

            Output = type(
                api_name,
                (BaseObjectType, graphene.ObjectType),
                _ouput
            )

            self.query[api_name] = graphene.Field(Output, **_input)
            self.query['resolve_'+api_name] = cls.query

            return cls
        return decorator
