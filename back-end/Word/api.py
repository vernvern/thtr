# -*- coding=utf-8 -*-

import arrow
import graphene
from django.core.cache import cache
from graphene_django import DjangoObjectType

from Public.graphene_hepler import GrapheneMutation
from Public.redis_helper import RedisHelper
from .models import WordModel
from . import graphene_models as g_models
from Public.graphene_hepler import Api


api = Api()


@api.register_mutation('addWord')
class AddWord(GrapheneMutation):
    ''' 添加词笔记 '''

    class Arguments:
        word = graphene.String()
        title = graphene.String()
        content = graphene.String()
        access_token = graphene.String()

    # module
    def mutate(self, info, word, title, content, access_token):
        data = {
            'word': word,
            'title': title,
            'content': content
        }
        redis = RedisHelper()
        word = WordModel(**data)
        user_id = cache.get(access_token)
        redis.hmset('word:'+word.id, word.as_dict())
        now = arrow.now()
        redis.zadd('user-words:'+user_id, now.timestamp, word.id)
        code = '0'
        return AddWord(code=code)


@api.register_mutation('editWord')
class EditWord(GrapheneMutation):
    ''' 修改词笔记 '''

    class Arguments:
        word_id = graphene.String()
        title = graphene.String()
        content = graphene.String()
        access_token = graphene.String()

    date_modified = graphene.String()

    # module
    def mutate(self, info, word_id, title, content, access_token):
        now = arrow.now()
        word = {
            'title': title,
            'content': content,
            'date_modified': now.timestamp
        }
        redis = RedisHelper()
        user_id = cache.get(access_token)
        redis.hmset('word:'+word_id, word)
        redis.zadd('user-words:'+user_id, now.timestamp, word_id)
        code = '0'
        return EditWord(code=code, date_modified=now.timestamp)


@api.register_query(api_name='words')
class WordList:
    class Arguments:
        index = graphene.Int()
        size = graphene.Int()
        access_token = graphene.String()

    words = graphene.List(g_models.WordType)
    total = graphene.Int()

    def query(self, info, index, size, access_token):
        ret = WordList()

        user_id = cache.get(access_token)
        redis = RedisHelper()
        start, stop = (index - 1) * size, index * size - 1
        words_id = redis.zrevrange('user-words:'+user_id, start, stop)
        words = [redis.hgetall('word:'+word_id) for word_id in words_id]
        words = [WordModel(**word) for word in words]
        total = redis.zcard('user-words:'+user_id)

        ret.words = words
        ret.total = total
        ret.code = '0'
        return ret


@api.register_query(api_name='word')
class WordDetail:
    class Arguments:
        word_id = graphene.String()
        access_token = graphene.String()

    title = graphene.String()
    content = graphene.String()
    is_author = graphene.Boolean()
    date_modified = graphene.String()

    def query(self, info, word_id, access_token=''):
        ret = WordDetail()

        redis = RedisHelper()
        word = redis.hgetall('word:'+word_id)
        if word:
            for k, v in word.items():
                setattr(ret, k, v)
            user_id = cache.get(access_token)
            if user_id:
                ranking = redis.zrevrank('user-words:'+user_id, word_id)
                ret.is_author = ranking is not None
            else:
                ret.is_author = False
            ret.code = '0'
        else:
            ret.code = '1005'
        return ret
