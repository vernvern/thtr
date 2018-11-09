# -*- coding=utf-8 -*-

import graphene
from django.core.cache import cache

from Public.graphene_hepler import GrapheneMutation
from Public.redis_helper import RedisHelper
from .models import WordModel


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
            redis.hmset(word.id, word.as_dict())
            redis.hmset('user_id:word_id', {user_id: word.id})
            code = '0'
        else:
            code = '1004'
        return AddWord(code=code)
