const fs = require('fs');

var dict = JSON.parse(fs.readFileSync('data/sentiment_dict.json'));
var sentiment = require('../helpers/sentiment.js');
var positiveSample = fs.readFileSync('data/positive_sample.txt').toString();
var negativeSample = fs.readFileSync('data/negative_sample.txt').toString();

var result1 = sentiment.getSentimentScore(positiveSample, dict);
var result2 = sentiment.getSentimentScore(negativeSample, dict);

console.log('positive sample result', result1);
console.log('negative sample result', result2);