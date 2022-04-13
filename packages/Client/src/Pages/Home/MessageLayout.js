import React from "react";
import { Message } from "./Message";
import axios from 'axios';

let textInput = React.createRef();

axios.defaults.withCredentials = true;

export class MessageLayout extends React.Component {
  state = {
    messages: []
  };

  render() {
    let list = <div className="empty-message-list">No messages to display</div>;
    if (this.props.friend) {
      this.reloadMessages(this.props.friend)
      list = this.state.messages.map(getMessageDetails);
    }
    return (
      <div className="message-layout">
        <div className="conversation">{list}</div>

        <div className="text-box">
          <input id="text" ref={textInput} placeholder="Type a message..." />
          <button onClick={this.handleClick}>Send</button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3001/send',
      params: {text: textInput.current.value, receiver: this.props.friend},
      credentials: true
    }
    axios.request(options).then((response) => {
      document.getElementById("text").value = ''
    }).catch((error) => {
      console.error(error)
      alert("Bad")
    })
    this.forceUpdate()
  }

  reloadMessages = (target) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3001/getMessages',
      params: {target: target},
      credentials: true
    }
  
    axios.request(options).then((response) => {
      var sortedMessages = response.data.sort((function (a, b) { 
        return new Date(a.timestamp) - new Date(b.timestamp) 
      }));
      var newMessages = sortedMessages.map(newMessage => ({sender: newMessage.sender, text: newMessage.message, id: 'random'}))
      this.setState({messages: newMessages})
    }).catch((error) => {
      console.error(error)
      alert("Bad")
    })
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
