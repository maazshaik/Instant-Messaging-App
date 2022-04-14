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

    

if __name__ == '__main__':
    unittest.main()