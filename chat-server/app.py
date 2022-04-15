from datetime import datetime
from flask import Flask, request, Response, jsonify, render_template
import json
import utils
import time
import sys
import logging


app = Flask(__name__)

logging.basicConfig(filename='record.log', level=logging.DEBUG, format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

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
        request_content = request.json
        user1 = request_content['sender']
        user1id = utils.decode(utils.get_userid(utils.make_username_key(user1)))
        message = request_content['text']
        user2 = request_content['receiver']
        user2id = utils.decode(utils.get_userid(utils.make_username_key(user2)))
        room_id = utils.get_room_id(user1id, user2id)
        timestamp = time.time()
        utils.send_message(room_id, message, timestamp, user1id, user1, user2)
        response = jsonify(success=True)
        return response, 200
    elif request.method == 'GET':
        user1 = request.args.get('source')
        user1id = utils.decode(utils.get_userid(utils.make_username_key(user1)))
        user2 = request.args.get('target')
        user2id = utils.decode(utils.get_userid(utils.make_username_key(user2)))
        room_id = utils.create_room_id(user1id, user2id)
        room_id = room_id[0]['id']
        data = utils.get_message(room_id)
        return jsonify(data), 200

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=6000, debug=True)
