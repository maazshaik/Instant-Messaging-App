import unittest
import Comm
import math
from Configurations import redis_connection


class Test(unittest.TestCase):
    def setUp(self):
        pass

    # The following tests comes under Integration tests
    # Test cases to check if the create_user method in the Comm module is working correctly. It should take a
    # username and generate a userid as per the total_users count in the DB

    def test_createUser(self):
        self.assertEqual(Comm.create_user("user3"),
                         {"id": int(redis_connection.get("total_users").decode("utf-8")) , "username": "user3"})
        self.assertEqual(Comm.create_user("user4"),
                         {"id": int(redis_connection.get("total_users").decode("utf-8")), "username": "user4"})
    
    # Test cases to check the functionality of send_message and get_message in the Comm module.
    # The payload is determined in the code and we are checking if the List returned is in the format expected.

    def test_sendAndGetMessage(self):
        u1 = Comm.get_userid(Comm.make_username_key('gaurav'))
        u2 = Comm.get_userid(Comm.make_username_key('roshan'))
        if u1 is None:
            userid1 = Comm.create_user('gaurav')['id']
        else:
            userid1 = int(u1.decode("utf-8").split(":")[1])

        if u2 is None:
            userid2 = Comm.create_user('roshan')['id']
        else:
            userid2 = int(u2.decode("utf-8").split(":")[1])
        response = Comm.create_room_id(userid1, userid2)
        room_id = response[0]
        Comm.send_message(room_id['id'], "Hello", 1.1, userid1)
        message = [{'user_details': userid1, 'message': 'Hello', 'timestamp': 1.1, 'room_details': str(userid1)+':'+str(userid2)}]
        self.assertEqual(Comm.get_message(room_id['id']), message)

    # Test cases to check if the get_room_id function in the Comm module is working properly
    def test_getRoomId(self):
        self.assertEqual(Comm.get_room_id(2,1), '1:2')
        self.assertTrue(Comm.get_room_id(2, 2) is None)
        self.assertTrue(Comm.get_room_id(2, math.nan) is None)

    # Test cases to check if the get_room_id function in the Comm module is working properly
    def test_getRoomId(self):
        self.assertEqual(Comm.get_room_id(2,1), '1:2')
        self.assertTrue(Comm.get_room_id(2, 2) is None)
        self.assertTrue(Comm.get_room_id(2, math.nan) is None)
        
    # Test cases to check if the decode function in the Comm module is working properly
    def test_decode(self):
        self.assertEqual(Comm.decode(b'user1:1'), 1)

    def test_getFrindsList(self):
        u1 = Comm.get_userid(Comm.make_username_key("user7"))
        u2 = Comm.get_userid(Comm.make_username_key("user8"))
        if u1 is None:
            userid1 = Comm.create_user("user7")['id']
        else:
            userid1 = int(u1.decode("utf-8").split(":")[1])

        if u2 is None:
            userid2 = Comm.create_user("user8")['id']
        else:
            userid2 = int(u2.decode("utf-8").split(":")[1])
        Comm.add_to_friends_list(userid1, userid2, 'user7', 'user8')
        user_id_list, users = Comm.get_friend_list(userid1, 'user7')
        self.assertEqual(users, ['user8'])
        self.assertEqual(user_id_list, [userid2])
    

if __name__ == '__main__':
    unittest.main()
