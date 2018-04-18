import React from 'react';

var Tweet = (props) => {
  return (
    <div className="tweet">
      <div className="tweet-screen-name">
        @{props.tweet.user.screenName}:
      </div>
      <div className="tweet-text">
        {props.tweet.text}
      </div>
    </div>
  );
}

export default Tweet;
