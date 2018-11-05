# -*- coding=utf-8 -*-

import graphene

from .response_helper import response_code


class BaseObjectType(graphene.AbstractType):

    code = graphene.String(default_value='0')
    msg = graphene.String()

    def __setattr__(self, key, value):
        if key == 'code':
            msg = response_code.get(value, None)
            self.msg = msg
        super().__setattr__(key, value)
