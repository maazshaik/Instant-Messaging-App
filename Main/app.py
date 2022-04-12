from flask import Flask, request, jsonify, render_template
import Comm
import time


app = Flask(__name__)


@app.route('/add', methods=['POST'])
def add_friend():
    user1 = None
    user2 = request.form('user')
    userid2 = Comm.decode(Comm.get_userid(Comm.make_username_key(user2)))


    Comm.add_to_friends_list(user1, user2)
    # Initiate the new User chat with the new friend
    response = Comm.create_room_id(user1, user2)
    print(response[0]['id'])
    # Create a pannel on UI
    # Pass

@app.route("/getfriend", methods=['GET'])
def get_friend():
    username = request.args.get('user1')
    user1 = Comm.decode(Comm.get_userid(Comm.make_username_key(username)))
    friendlistid, friendlist = Comm.get_friend_list(user1, username)
    print(username)
    print(user1)
    return jsonify(friendlist)




@app.route('/UI', methods = ['GET', 'POST'])
def send_msg():
    if request.method == 'POST':
        user1 = None
        message = request.form('message')
        user2 = Comm.decode(Comm.get_userid(Comm.make_username_key(request.args.get('user'))))
        room_id = Comm.get_room_id(user1, user2)
        timestamp = time.time()
        Comm.send_message(room_id, message, timestamp, user1)
    elif request.method == 'GET':
        user = None
        user1 = Comm.decode(Comm.get_userid(Comm.make_username_key(user)))
        friend_list = Comm.get_friend_list(user1)
        messages = []
        for i in range(len(friend_list)):
            user2 = friend_list[i]
            room_id = Comm.get_room_id(user1, user2)
            data = Comm.get_message(room_id)
            messages.append(data)
        messages = jsonify(messages)
        return messages

if __name__ == "__main__":
    app.run()









