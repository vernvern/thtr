# 公共模块


## redis

### db 0

#### 哈希

user_id {'email': str, 'nick_name': str, 'password': str, 'description': str, 'date_created': str, 'date_modified': str, removed=bool}

word_id {'word': str, 'content': str, 'date_created': str, 'date_modified': str, removed=bool}

user_email:user_id {'user_email': 'user_email', ...}
access_token:user_id {'access_token': 'user_id', ...}

#### 有序集合

word-word_id: `ZADD word date_created word_id`
user_id-word_id: `ZADD user_id date_created word_id`
