# -*- coding=utf-8 -*-

import os
import sys
import json
import random

import fire

from config import config


def add_word(word):
    with open(config['PENDING_PATH'], 'r+') as f:
        try:
            words = json.load(f)
        except json.decoder.JSONDecodeError as e:
            words = []
        words.append(word)
        words = list(set(words))
        f.seek(0)
        f.truncate()
        f.write(json.dumps(words))
    os.chdir(config['ROOT_PATH'])
    os.system('git add {}'.format(config['PENDING_PATH']))
    os.system('git commit -m ":beers: add word:"'.format(word))
    os.system('git push')
    return word


def random_word():
    with open(config['PENDING_PATH'], 'r') as f:
        try:
            word = random.choice(json.load(f))
        except json.decoder.JSONDecodeError as e:
            word = '🍺 nothing todo!'
    return word


def fix_word(word):
    word = str(word)
    file_path = os.path.join(config['ROOT_PATH'], 'data/notes', word + '.md')
    os.system('vim {}'.format(file_path))
    if os.path.isfile(file_path):
        with open(config['FIX_PATH'], 'r+') as f:
            try:
                notes = json.load(f)
            except json.decoder.JSONDecodeError as e:
                notes = []
            if word not in notes:
                notes.append(word)
                f.seek(0)
                f.truncate()
                f.write(json.dumps(notes))
            print('fix: ', notes)

        with open(config['PENDING_PATH'], 'r') as f:
            try:
                notes = json.load(f)
            except json.decoder.JSONDecodeError as e:
                notes = []
            if word in notes:
                notes.remove(word)
                f.seek(0)
                f.truncate()
                f.write(json.dumps(notes))
            print('pending: ', notes)

        # push
        os.system('git add {} {} {}'.format(
            file_path
            config['FIX_PATH'],
            config['PENDING_PATH'],
        ))
        os.system('git commit -m ":beers: add word:"'.format(word))
        os.system('git push')

    else:
        msg = '''
 _                       _                           _ _
| |    __ _ _____   _   | |__   ___  _ __   ___  ___| | |
| |   / _` |_  / | | |  | '_ \ / _ \| '_ \ / _ \/ __| | |
| |__| (_| |/ /| |_| |  | |_) | (_) | | | |  __/\__ \_|_|
|_____\__,_/___|\__, |  |_.__/ \___/|_| |_|\___||___(_|_)
                |___/
        '''
        print(msg)


if __name__ == '__main__':
    fire.Fire({
        'add': add_word,
        'random': random_word,
        'fix': fix_word
    })
