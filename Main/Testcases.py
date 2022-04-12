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
    results = Comm.get_message(room_id)
    print(results)

def test_case_create_username(username):
    response = Comm.create_user(username)
    return response['id']

def test_case_get_friend_list(userid, username):
    id,usernames = Comm.get_friend_list(userid, username)
    return id, usernames

if __name__ == "__main__":
    user1 = input("enter your name user 1")
    user2 = input("enter your name user 2")
    u1 = Comm.get_userid(Comm.make_username_key(user1))
    u2 = Comm.get_userid(Comm.make_username_key(user2))
    if u1 is None:
        userid1 = test_case_create_username(user1)
    else:
        userid1 = int(u1.decode("utf-8").split(":")[1])

    if u2 is None:
        userid2 = test_case_create_username(user2)
    else:
        userid2 = int(u2.decode("utf-8").split(":")[1])
    Comm.add_to_friends_list(userid1, userid2, user1, user2)
    print(userid1)
    print(userid2)
    user_id_list, users = test_case_get_friend_list(userid1, user1)
    print(user_id_list)
    print(users)
    room_id = test_case_create_room_id(userid1, userid2)
    print(room_id)
    test_case_send_message(room_id, userid1)
    test_case_get_message(room_id)


