const axios = require('axios');
const _ = require('underscore');
//base64 encoded key: 'M3o4TFJQdHBMM3hsbHQ3YVZzcHFzdW1ZQzpWMnJDQWVDaGRJM3FXazBIbGN2eDREVUFuRWhRUENlUDFPOXZ0MkhuSEpJTkJOVHkwYg=='
//consumer key:     '3z8LRPtpL3xllt7aVspqsumYC'
//secret key: 'V2rCAeChdI3qWk0Hlcvx4DUAnEhQPCeP1O9vt2HnHJINBNTy0b'

axios({
  method: 'post',
  url: 'https://api.twitter.com/oauth2/token',
  headers: {
    'Authorization': 'Basic M3o4TFJQdHBMM3hsbHQ3YVZzcHFzdW1ZQzpWMnJDQWVDaGRJM3FXazBIbGN2eDREVUFuRWhRUENlUDFPOXZ0MkhuSEpJTkJOVHkwYg==',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  data: 'grant_type=client_credentials'
})
.then(reply => {
  var token = reply.data.access_token;
  return axios({
    method: 'get',
    url: 'https://api.twitter.com/1.1/search/tweets.json',
    params: {
      q: 'donald trump',
      count: 100,
      tweet_mode: 'extended',
      result_type: 'popular'
    },
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
})
.then(reply => {
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
      },

      entities: {
        hashtags: tweet.entities.hashtags,
        userMentions: tweet.entities.user_mentions
      }

    };
  });
  console.log(output[0]);
})
.catch(err => console.error(err))



// axios({
//   method: 'get',
//   url: 'https://api.twitter.com/1.1/search/tweets.json',
//   params: {
//     q: 'donald trump',
//     count: 100
//   },
//   auth: {

//   }
// })