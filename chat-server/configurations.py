#import redis
#Postgres Library
#Before starting the script add
# set total_user 0

#redis_connection = redis.Redis(host='localhost', port=6379, db=0)

#postgres_connection = "0"

import redis

redis_connection = redis.Redis(host='global-darling-cub-32426.upstash.io', port='32426', password='a2d857fccfc94c7f97a0987654eb81ee')

redis_connection.set('total_users', 0)
print(redis_connection.get('total_users').decode('utf-8'))
