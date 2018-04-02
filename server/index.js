const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const _ = require('underscore');

var dict = JSON.parse(fs.readFileSync('data/sentiment_dict.json'));
var sentimentHelper = require('../helpers/sentiment.js');
var tweetsHelper = require('../helpers/tweets.js');
var stocksHelper = require('../helpers/stocks.js');


app.use(morgan('tiny'));

app.get('/:ticker', (req, res) => {
  var stock;
  var tweets;
  var scores;
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
    scores = _.map(tweets, tweet => {
      return sentimentHelper.getSentimentScore(tweet.text, dict);
    });
    var output = {
      stock: stock,
      tweets: tweets,
      scores: scores
    }
    res.send(output);
  })
  .catch(err => {
    console.error(err);
    res.status(400).send(err);
  })
})

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port', port + '...'));