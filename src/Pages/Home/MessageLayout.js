import React from "react";
import { Message } from "./Message";
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
          <input type="text" />
          <button>Send</button>
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
