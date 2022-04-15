import React from "react";
import { FriendList } from "./FriendList";
import { MessageLayout } from "./MessageLayout";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { DefaultMessageLayout } from "./DefaultMessageLayout";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [{ name: "abhinav" }],
      selectedFriend: null
    };
    this.updateFriendSelected = this.updateFriendSelected.bind(this);
    this.getFriendPanel = this.getFriendPanel.bind(this);
  }

  updateFriendSelected(friend) {
    alert('success')
    this.setState({ selectedFriend: friend })
  }

  getFriendPanel(friend) {
    return <div className="friend-panel" onClick={() => this.updateFriendSelected(friend.name)}>
      <div>{friend.name}</div>
    </div>
  }

  render() {
    let messageLayout = <DefaultMessageLayout />
    if (this.state.selectedFriend) {
      messageLayout = <MessageLayout friend={this.state.selectedFriend} />
    }
    return (
      <div className="home-page">
        <div className="friend-list">{this.state.friendList.map(this.getFriendPanel)}</div>;
        {messageLayout}
      </div>
    );
  }
}

function HomeN(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}

export default HomeN;
