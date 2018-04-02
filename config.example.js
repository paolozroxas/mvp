//Rename file to config.js

//twitter api keys
var consumerKey = 'YOUR_CONSUMER_KEY_HERE';
var secretKey = 'YOUR_SECRET_KEY_HERE';
var base64Key = new Buffer(`${consumerKey}:${secretKey}`).toString('base64');

module.exports.twitter = {
  consumerKey: consumerKey,
  secretKey: secretKey,
  base64Key: base64Key
}

//last10k api keys
var primaryKey = 'YOUR_PRIMARY_KEY_HERE';
var secondaryKey = 'YOUR_SECONDARY_KEY_HERE';

module.exports.last10k = {
  primaryKey: primaryKey,
  secondaryKey: secondaryKey
}