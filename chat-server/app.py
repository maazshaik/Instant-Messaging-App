from flask import Flask, request, Response, jsonify, render_template
import json
import utils
import time


app = Flask(__name__)


@app.route('/add', methods=['POST'])
def add_friend():
    user1 = None
    user2 = utils.decode(utils.get_userid(utils.make_username_key(request.form('user'))))


    utils.add_to_friends_list(user1, user2)
    # Initiate the new User chat with the new friend
    response = utils.create_room_id(user1, user2)
    print(response[0]['id'])
    # Create a pannel on UI
    # Pass

@app.route('/send', methods = ['GET', 'POST'])
def send_msg():
    if request.method == 'GET':
        user1 = 1
        message = request.args["text"]
        #user2 = utils.decode(utils.get_userid(utils.make_username_key(request.args.get('user'))))
        user2 = 2
        room_id = utils.get_room_id(user1, user2)
        timestamp = time.time()
        print("Sending: ", message, "from user:", user1, "to user:", user2)
        utils.send_message(room_id, message, timestamp, user1)

        jsonPayload = {}
        response = json.dumps(jsonPayload, indent=4, sort_keys=True)
        return Response(response=response, status=200, mimetype="application/json")
    elif request.method == 'GET':
        user = None
        user1 = utils.decode(utils.get_userid(utils.make_username_key(user)))
        friend_list = utils.get_friend_list(user1)
        messages = []
        for i in range(len(friend_list)):
            user2 = friend_list[i]
            room_id = utils.get_room_id(user1, user2)
            data = utils.get_message(room_id)
            messages.append(data)
        messages = jsonify(messages)
        return messages



if __name__ == '__main__':
  app.run(host="0.0.0.0", port=6000)






