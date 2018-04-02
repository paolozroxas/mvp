const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const _ = require('underscore');

var dict = JSON.parse(fs.readFileSync('data/sentiment_dict.json'));
var sentimentHelper = require('../helpers/sentiment.js');
var tweetsHelper = require('../helpers/tweets.js');
var stocksHelper = require('../helpers/stocks.js');


app.use(morgan('tiny'));
app.use(cors());

app.use('/:ticker', express.static('./client/dist'));

app.get('/api/:ticker', (req, res) => {
  var stock;
  var tweets;
  var ticker = req.params.ticker;
  if (ticker.length > 5) {
    throw 'Invalid Ticker: Too long...';
  }
  stocksHelper.getStockByTicker(req.params.ticker)
  .then(result => {
    stock = result;
    var name = stock.Name;
    return tweetsHelper.getTweetsByKeyword(name);
  })
  .then(result => {
    tweets = result;
    _.each(tweets, tweet => {
      tweet.sentiment = sentimentHelper.getSentimentScore(tweet, dict);
    });
    tweets = _.filter(tweets, tweet => {
      return tweet.sentiment.influence.net !== 0;
    });
    tweets.sort((tweet1, tweet2) => {
      if (Math.abs(tweet1.sentiment.influence.net) >= Math.abs(tweet2.sentiment.influence.net)) {
        return -1;
      } else {
        return 1;
      }
    });
    var contentScore = _.reduce(tweets, (acc, tweet) => {
      return acc + tweet.sentiment.content.net;
    }, 0) / tweets.length;
    var influenceScore = _.reduce(tweets, (acc, tweet) => {
      return acc + tweet.sentiment.influence.net;
    }, 0) / tweets.length;
    var output = {
      stock: stock,
      scores: {
        content: contentScore,
        influence: influenceScore
      },
      tweets: tweets
    };
    res.send(output);
  })
  .catch(err => {
    console.error(err);
    res.status(400).send(err);
  })
})

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port', port + '...'));
