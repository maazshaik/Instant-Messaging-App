import Comm
from Configurations import redis_connection
import time


def test_case_send_message(room_id,user_id):
    message = input("Enter the message")
    timestamp = time.time()
    Comm.send_message(room_id,message,timestamp,user_id)

def test_case_create_room_id(user1, user2):
    response = Comm.create_room_id(user1, user2)
    room_id = response[0]
    return room_id['id']

def test_case_get_message(room_id):
    results = Comm.get_message(room_id,0,50)
    print(results)

if __name__ == "__main__":
    user1 = 1
    user2 = 2
    room_id = test_case_create_room_id(user1, user2)
    print(room_id)
    test_case_send_message(room_id,user2)
    test_case_get_message(room_id)


