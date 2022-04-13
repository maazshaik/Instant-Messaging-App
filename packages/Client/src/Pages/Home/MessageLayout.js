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
    console.log(this.state.messages)
    let list = <div className="empty-message-list">No messages to display</div>;
    if (this.props.friend && this.props.friend.messages) {
      list = this.props.friend.messages.map(getMessageDetails);
    }
    else if (this.state.messages.length) {
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
      params: {text: textInput.current.value, receiver: 'abhinav'},
    }
    axios.request(options).then((response) => {
      console.log(response.data)
      alert(response.data)
      document.getElementById("text").value = ''
    }).catch((error) => {
      console.error(error)
      alert("Bad")
    })
    this.reloadMessages()
  }

  reloadMessages = () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3001/getMessages',
      params: {target: 'abhinav'},
    }
  
    axios.request(options).then((response) => {
      var sortedMessages = response.data.sort((function (a, b) { 
        return new Date(a.timestamp) - new Date(b.timestamp) 
      }));
      var newMessages = sortedMessages.map(newMessage => ({sender: newMessage.user_details, text: newMessage.message, id: 'random'}))
      this.setState({messages: newMessages})
      console.log('new messages')
      this.forceUpdate()
      //document.getElementById("text").value = ''
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
