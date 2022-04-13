import React from "react";
import { FriendPanel } from "./FriendPanel";
export class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.updateFriendSelected = this.updateFriendSelected.bind(this);
  }

  render() {
    let list = `Friend List is empty`;
    if (this.props.friendList) {
      list = this.props.friendList.map(this.getFriendDetails);
    }
    return <div className="friend-list">{list}</div>;
  }

  updateFriendSelected = (name) => {
    this.props.onFriendListChange(name)
  }

  getFriendDetails(item) {
    return <FriendPanel name={item.name} onFriendPanelChange={this.props.onFriendListChange}></FriendPanel>;
  }

}
