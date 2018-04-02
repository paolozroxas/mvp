//twitter api keys
var consumerKey = '3z8LRPtpL3xllt7aVspqsumYC';
var secretKey = 'V2rCAeChdI3qWk0Hlcvx4DUAnEhQPCeP1O9vt2HnHJINBNTy0b';
var base64Key = new Buffer(`${consumerKey}:${secretKey}`).toString('base64');

module.exports.twitter = {
  consumerKey: consumerKey,
  secretKey: secretKey,
  base64Key: base64Key
};

//last10k api keys
var primaryKey = 'fbb1295f75a844b491d47e8bf63a3666';
var secondaryKey = '7c7302a09bab405e94bb119642015c75';

module.exports.last10k = {
  primaryKey: primaryKey,
  secondaryKey: secondaryKey
}