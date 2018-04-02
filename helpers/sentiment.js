module.exports.getSentimentScore = (tweet, dict) => {
  var positiveWordCount = 0;
  var negativeWordCount = 0;
  var words = tweet.text.replace( /\n/g, " " ).replace(/[^a-zA-Z\d\s]/g, '').split(' ');

  //check if word in sentiment dictionary
  for(var i = 0; i < words.length; i++) {
    var word = words[i].toUpperCase();
    if (dict.hasOwnProperty(word)) {
      if (dict[word]) {
        positiveWordCount++;
      } else {
        negativeWordCount++;
      }
    }
  }

  //get scores as percentage words
  var positiveScore = 100 * positiveWordCount / words.length;
  var negativeScore = 100 * negativeWordCount / words.length;
  var netScore = positiveScore - negativeScore;

  //weigh scores by sum of favorite and retweet counts
  var positiveInfluence = positiveScore * (1 + tweet.favoriteCount + tweet.retweetCount);
  var negativeInfluence = negativeScore * (1 + tweet.favoriteCount + tweet.retweetCount);
  var netInfluence = netScore * (1 + tweet.favoriteCount + tweet.retweetCount);

  return {
    content: {
      positive: positiveScore,
      negative: negativeScore,
      net: netScore
    },
    influence: {
      positive: positiveInfluence,
      negative: negativeInfluence,
      net: netInfluence
    }
  };
}
