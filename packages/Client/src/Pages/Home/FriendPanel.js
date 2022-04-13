import React from "react";
export class FriendPanel extends React.Component {
  render() {
    return (
      <div className="friend-panel" onClick={this.updateFriendSelected}>
        <div>{this.props.name}</div>
      </div>
    );
  }

  updateFriendSelected = () => {
    this.props.onFriendPanelChange(this.props.name)
  }
}
