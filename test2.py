import redis
import time
import json

conn = redis.Redis(host='localhost', port=6379, db=0)


def Recieve():
    results = conn.zrevrange('abc' , 0, 10)
    return results

def publish(message):
    timestamp = time.time()

    conn.zadd('abc', {message:int(timestamp)})


def operate(key):
    if key==0:
        results = Recieve()
        print(results)
    else:
        message = input("Enter the message")
        publish(message)

if __name__ == "__main__":
    while True:
        key = int(input("Enter 1 to Publish and 0 to view messages"))
        if key == 2:
            break
        operate(key)

