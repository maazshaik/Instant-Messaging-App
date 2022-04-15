import React from "react";
import { Message } from "./Message";
import axios from 'axios';

let textInput = React.createRef();

axios.defaults.withCredentials = true;

export class MessageLayout extends React.Component {

  state = {
    messages: []
  }

  componentDidMount() {
    this.timerID = setInterval(this.reloadMessages, 10000)

    const options = {
      method: 'GET',
      url: 'http://localhost:3001/getMessages',
      params: { target: this.props.friend },
      credentials: true
    }

    axios.request(options).then((response) => {
      var sortedMessages = response.data.sort((function (a, b) {
        return new Date(a.timestamp) - new Date(b.timestamp)
      }));
      this.setState({ messages: sortedMessages.map(newMessage => ({ sender: newMessage.sender, text: newMessage.message, id: 'random' })) })
    }).catch((error) => {
      console.error(error)
      alert("Bad")
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="message-layout">
        <div className="conversation">{this.state.messages.map(convertJsonMessageToHtml)}</div>
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
      params: { text: textInput.current.value, receiver: this.props.friend },
      credentials: true
    }
    axios.request(options).then((response) => {
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
      params: { target: this.props.friend },
      credentials: true
    }

    axios.request(options).then((response) => {
      var sortedMessages = response.data.sort((function (a, b) {
        return new Date(a.timestamp) - new Date(b.timestamp)
      }));
      this.setState({ messages: sortedMessages.map(newMessage => ({ sender: newMessage.sender, text: newMessage.message, id: 'random' })) })
    }).catch((error) => {
      console.error(error)
      alert("Bad")
    })
  }
}

function convertJsonMessageToHtml(message) {
  return (
    <Message
      id={message.id}
      sender={message.sender}
      text={message.text}
    ></Message>
  );
}