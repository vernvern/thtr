# thtr

English words are --

Too hard To Remember !!!


# Install

    pip install -r ./requirements.txt
    export thtr=/project_path/thtr


## Features

- add new word:
    ```
    $ thtr add new_word
    ```
    It will add 'new_word' in ./data/pending.json and push to github.


- get a pending word:
    ```
    $ thtr random
    ```
    It will catch a word unsystematic from ./data/pending.json.

    then run  and I must find and save some thing related to this word!!

    Without any reason!!!


- fix word:
    ```
    $ thtr fix word
    ```
    1. run `vim ./data/notes/random_word.md`
    2.
    ```
    if ./data/notes/random_word.md is exist:
        - move this word from ./data/pending.json to ./data/fix.json.
        - and then rewrite the second half of ./README.md(split by '---')
        - git add ./data/notes/word.md ./data/pending.json ./data/fix.json
        - git commit ':beers: fix word'
        - git push
     else:
        print('Lazy bones!!')
    ```

---
