import React from "react";
import { Message } from "./Message";
import axios from 'axios';

let textInput = React.createRef();

axios.defaults.withCredentials = true;

export class MessageLayout extends React.Component {
  render() {
    let list = <div className="empty-message-list">No messages to display</div>;
    if (this.props.friend && this.props.friend.messages) {
      list = this.props.friend.messages.map(getMessageDetails);
    }
    return (
      <div className="message-layout">
        <div className="conversation">{list}</div>

        <div className="text-box">
          <input id="text" ref={textInput} placeholder="Type a message..." />
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    );
  }
}

function getMessageDetails(message) {
  return (
    <Message
      id={message.id}
      sender={message.sender}
      text={message.text}
    ></Message>
  );
}

function handleClick() {
  const options = {
    method: 'GET',
    url: 'http://localhost:3001/send',
    params: {text: textInput.current.value},
  }

  axios.request(options).then((response) => {
    console.log(response.data)
    alert(response.data)
    document.getElementById("text").value = ''
  }).catch((error) => {
    console.error(error)
    alert("Bad")
  })
}