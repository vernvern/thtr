# -*- coding=utf-8 -*-

import uuid
import arrow
from copy import deepcopy

from django.db import models


class BaseModel(models.Model):
    date_created = models.CharField(max_length=13)
    date_modified = models.CharField(max_length=13)
    removed = models.BooleanField(default=False, blank=True)
    id = models.UUIDField(primary_key=True)

    class Meta:
        abstract = True

    def __init__(self, *args, **kw):
        now = arrow.now().to('08:00').datetime
        if 'date_created' not in kw:
            kw['date_created'] = now.timestamp
        if 'date_modified' not in kw:
            kw['date_modified'] = now.timestamp
        if 'id' not in kw:
            kw['id'] = str(uuid.uuid4())

        super().__init__(*args, **kw)

    def as_dict(self):
        _dict = deepcopy(self.__dict__)
        _dict.pop('_state')

        _dict['date_created'] = arrow.get(_dict['date_created']).timestamp
        _dict['date_modified'] = arrow.get(_dict['date_modified']).timestamp
        return _dict
