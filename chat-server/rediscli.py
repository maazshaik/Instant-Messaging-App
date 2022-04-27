from configurations import redis_connection

user_exist = redis_connection.exists("user:2:rooms")
if user_exist:
    #print(redis_connection.keys()) #("username:abhinav"))
    name = redis_connection.zrangebyscore("user:2:rooms", 0, -1)
    print(name)
    #redis_connection.delete("username:username:vasanth")
    #print(redis_connection.keys())
print("Hello")