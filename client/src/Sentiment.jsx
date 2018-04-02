import React from 'react';
import Tweet from './Tweet.jsx';

var Sentiment = (props) => {
  return(
    <div className="flex-column sentiment">
      <div className="scores">
        <div className="influence-score">
          <div className="score-value">{props.scores.influence.toFixed(2)}</div>
          <div className="score-label">Influence Score</div>
        </div>
        <div className="content-score">
          <div className="score-value">{props.scores.content.toFixed(2)}</div>
          <div className="score-label">Content Score</div>
        </div>
      </div>
      <div className="tweets">
        {
          props.tweets.map((tweet, index) => {
            return <Tweet tweet={tweet} key={index}/>;
          })
        }
      </div>
    </div>
  );
}

export default Sentiment
