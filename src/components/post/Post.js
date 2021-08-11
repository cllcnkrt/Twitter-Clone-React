import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({ displayName, username, verified, timestamp, text, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://www.kacyasinda.com/wp-content/uploads/2019/06/jackie-chan-1.jpg" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              jackie chan{" "}
              <span className="post__headerSpecial">
                {" "}
                <VerifiedUserIcon className="post__badge" />
                @jackiechan
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Hello this is my first tweet..</p>
          </div>
        </div>
        <img
          src="https://38.media.tumblr.com/e61ae32fc76d219e9af94ca20150e9d7/tumblr_npoph8XVWq1tq4of6o1_400.gif"
          alt="gif"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
