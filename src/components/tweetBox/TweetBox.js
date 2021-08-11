import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/media/DXw5Hq4WkAAj2Nh.jpg" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
