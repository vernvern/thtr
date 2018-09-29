# -*- coding=utf-8 -*-

import sys
import os.path


ROOT_PATH = sys.path[0]


class Config(dict):

    ROOT_PATH = ROOT_PATH
    FIX_PATH = os.path.join(ROOT_PATH, 'data/fix.json')
    PENDING_PATH = os.path.join(ROOT_PATH, 'data/pending.json')

    def __getitem__(self, key):
        return getattr(self, key)

    def __setitem__(self, key, values):
        setattr(self, key, values)


config = Config()
