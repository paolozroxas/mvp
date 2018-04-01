//Rename file to twitter.config.js
var consumerKey = 'YOUR_CONSUMER_KEY_HERE';
var secretKey = 'YOUR_SECRET_KEY_HERE';
var base64Key = new Buffer(`${consumerKey}:${secretKey}`).toString('base64');

module.exports = {
  consumerKey: consumerKey,
  secretKey: secretKey,
  base64Key: base64Key
}