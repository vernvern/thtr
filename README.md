# thtr

English words are --

Too hard To Remember !!!


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
    
    then run `vim ./data/notes/random_word.md` and I must find and save some thing related to this word!! 
    
    Without any reason!!!


- fix word:
    ```
    $ thtr fix word
    ```
    move this word from ./data/pending.json to ./data/fix.json.
    
    and then rewrite the second half of ./README.md(split by '---')
    
    What this command do:
    - `git add ./data/notes/word.md ./data/pending.json ./data/fix.json`
    - `git commit ':beers: fix word'`
    - `git push`
    

---
