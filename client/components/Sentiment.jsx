import React from 'react';
import Tweet from './Tweet.jsx';
import { connect } from 'react-redux';

var Sentiment = (props) => {
  return (
    <div className="flex-column sentiment">
      <div className="scores flexbox-row">
        <div className="influence-score score flexbox-column">
          <div className="score-value">{props.scores.influence.toFixed(2)}</div>
          <div className="score-label">Influence Score</div>
        </div>
        <div className="content-score score flexbox-column">
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

var mapStateToProps = (state) => {
  return {
    tweets: state.company.tweets,
    scores: state.company.scores
  };
};

export default connect(mapStateToProps, null)(Sentiment);
