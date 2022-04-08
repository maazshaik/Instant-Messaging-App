import React from "react";
export class FriendPanel extends React.Component {
  render() {
    return (
      <div className="friend-panel">
        <div>{this.props.name}</div>
      </div>
    );
  }
}
