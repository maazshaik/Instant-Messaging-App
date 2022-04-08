import React from "react";
import { FriendList } from "./FriendList";
import { MessageLayout } from "./MessageLayout";
import { useNavigate } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  state = {
    friendList: [{ name: "Friend 1" }, { name: "Friend 2" }],
  };
  render() {
    return (
      <div className="home-page">
        <FriendList friendList={this.state.friendList} />
        <MessageLayout />
      </div>
    );
  }
}

function HomeN(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}

export default HomeN;
