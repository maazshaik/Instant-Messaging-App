import React from "react";
import { FriendPanel } from "./FriendPanel";
export class FriendList extends React.Component {
  render() {
    let list = `Friend List is empty`;
    if (this.props.friendList) {
      list = this.props.friendList.map(getFriendDetails);
    }
    return <div className="friend-list">{list}</div>;
  }
}

function getFriendDetails(item) {
  return <FriendPanel name={item.name}></FriendPanel>;
}
