# -*- coding=utf-8 -*-

import arrow
import graphene
from django.core.cache import cache

from Public.graphene_hepler import GrapheneMutation
from Public.redis_helper import RedisHelper
from .models import WordModel
from . import graphene_models as g_models


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
        user_id = cache.get(access_token)
        if user_id:
            word = WordModel(**data)
            redis.hmset('word:'+word.id, word.as_dict())
            now = arrow.now()
            redis.zadd('user-words:'+user_id, now.timestamp, word.id)
            code = '0'
        else:
            code = '1004'
        return AddWord(code=code)


class EditWord(GrapheneMutation):
    ''' 修改词笔记 '''

    class Arguments:
        word_id = graphene.String()
        title = graphene.String()
        content = graphene.String()
        access_token = graphene.String()

    # module
    def mutate(self, info, word_id, title, content, access_token):
        word = {
            'title': title,
            'content': content
        }
        redis = RedisHelper()
        user_id = cache.get(access_token)
        if user_id:
            redis.hmset('word:'+word_id, word)
            now = arrow.now()
            redis.zadd('user-words:'+user_id, now.timestamp, word_id)
            code = '0'
        else:
            code = '1004'
        return EditWord(code=code)


class WordList:
    words = graphene.Field(
        g_models.WordListOutputType,
        **g_models.WordListInputType
    )

    def resolve_words(self, info, index, size, access_token):
        ret = g_models.WordListOutputType()

        user_id = cache.get(access_token)
        if user_id:
            redis = RedisHelper()
            start, stop = (index - 1) * size, index * size - 1
            words_id = redis.zrevrange('user-words:'+user_id, start, stop)
            words = [redis.hgetall('word:'+word_id) for word_id in words_id]
            words = [WordModel(**word) for word in words]
            total = redis.zcard('user-words:'+user_id)

            ret.words = words
            ret.total = total
            ret.code = '0'
        else:
            ret.code = '1004'
        return ret


class WordDetail:
    word = graphene.Field(
        g_models.WordDetailOutputType,
        **{'word_id': graphene.String(), 'access_token': graphene.String()}
    )

    def resolve_word(self, info, word_id, access_token=''):
        ret = g_models.WordDetailOutputType()

        redis = RedisHelper()
        word = redis.hgetall('word:'+word_id)
        if word:
            for k, v in word.items():
                setattr(ret, k, v)
            user_id = cache.get(access_token)
            if user_id:
                ret.is_author = redis.zrevrank('user-words:'+user_id, word_id) is not None
            else:
                ret.is_author = False
            ret.code = '0'
        else:
            ret.code = '1005'
        return ret
