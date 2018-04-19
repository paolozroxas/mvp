const axios = require('axios');
const _ = require('underscore');
const keys = require('../config.js');

module.exports.getTweetsByKeyword = (keyword) => {
  //get oath2 bearer token
  return axios({
    method: 'post',
    url: 'https://api.twitter.com/oauth2/token',
    headers: {
      'Authorization': 'Basic ' + (process.env.TWITTER_KEY || keys.twitter.base64Key),
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    data: 'grant_type=client_credentials'
  })
  .then(reply => {
    //get tweets
    var token = reply.data.access_token;
    return axios({
      method: 'get',
      url: 'https://api.twitter.com/1.1/search/tweets.json',
      params: {
        q: keyword,
        count: 100,
        tweet_mode: 'extended',
        result_type: 'mixed'
      },
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
  })
  .then(reply => {
    //extract pertinent information from tweets
    var tweets = reply.data.statuses;
    var tweetsOutput = [];
    var output = _.map(tweets, tweet => {
      return {
        id: tweet.id,
        text: tweet.full_text,
        createdAt: tweet.created_at,
        retweetCount: tweet.retweet_count,
        favoriteCount: tweet.favorite_count,

        user: {
          id: tweet.user.id,
          name: tweet.user.name,
          screenName: tweet.user.screen_name,
          followersCount: tweet.user.followers_count,
          friendsCount: tweet.user.friends_count,
        }
      };
    });
    return output;
  })
  .catch(err => console.error(err));

};
