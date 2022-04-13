from flask import Flask, request, Response, jsonify, render_template
import json
import utils
import time


app = Flask(__name__)


@app.route('/friend/add', methods=['POST'])
def add_friend():
    user1 = None
    user2 = request.form('user')
    userid2 = utils.decode(utils.get_userid(utils.make_username_key(user2)))
    utils.add_to_friends_list(user1, user2)
    # Initiate the new User chat with the new friend
    response = utils.create_room_id(user1, user2)
    print(response[0]['id'])
    # Create a pannel on UI
    # Pass

@app.route("/friend/get", methods=['GET'])
def get_friend():
    username = request.args.get('user1')
    user1 = utils.decode(utils.get_userid(utils.make_username_key(username)))
    friendlistid, friendlist = utils.get_friend_list(user1, username)
    print(username)
    print(user1)

    return jsonify(friendlist)

@app.route('/send', methods = ['GET', 'POST'])
def send_msg():
    if request.method == 'POST':
        # TODO get user from session
        user1 = 'dhrumil'
        user1 = utils.decode(utils.get_userid(utils.make_username_key(user1)))
        message = request.args.get('message')
        user2 = utils.decode(utils.get_userid(utils.make_username_key(request.args.get('user2'))))
        print(user1, user2, flush=True)
        room_id = utils.get_room_id(user1, user2)
        timestamp = time.time()
        utils.send_message(room_id, message, timestamp, user1)
        response = jsonify(success=True)
        return response, 200
    elif request.method == 'GET':
        #user1 = None
        # TODO get user from session
        user1 = 'dhrumil'
        user1id = utils.decode(utils.get_userid(utils.make_username_key(user1)))
        user2 = request.args.get('user2')
        user2id = utils.decode(utils.get_userid(utils.make_username_key(user2)))
        room_id = utils.create_room_id(user1id, user2id)
        room_id = room_id[0]['id']
        data = utils.get_message(room_id)
        return jsonify(data), 200

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=6000)






