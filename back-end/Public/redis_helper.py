# -*- coding=utf-8 -*-

import pickle
from functools import wraps

from django_redis import get_redis_connection

from Member.models import UserModel


def format_unicode(func):
    @wraps(func)
    def wrapper(*args, **kw):
        ret = func(*args, **kw)
        if isinstance(ret, bytes):
            ret = ret.decode('utf-8')
        elif isinstance(ret, list):
            ret = [x.decode('utf-8') for x in ret if isinstance(x, bytes)]
        elif isinstance(ret, dict):
            ret = dict((k.decode('utf-8'), v.decode('utf-8')) for k, v in ret.items())
        return ret
    return wrapper


class RedisHelper:
    def __init__(self, alias='default', write=True):
        self.redis_connection = get_redis_connection(alias, write)

    def __getattr__(self, item):
        return format_unicode(getattr(self.redis_connection, item))

    def __setattr__(self, item, value):
        if item == 'redis_connection':
            return super().__setattr__(item, value)
        else:
            return setattr(self.redis_connection, item, value)

    def __str__(self):
        return str(self.redis_connection)

    def __repr__(self):
        return repr(self.redis_connection)
