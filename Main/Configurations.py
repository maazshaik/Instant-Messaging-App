import redis
#Postgres Library



#Before starting the script add
# set total_user 0

redis_connection = redis.Redis(host='localhost', port=6379, db=0)

postgres_connection = "0"
