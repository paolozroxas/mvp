module.exports.getSentimentScore = (snippet, dict) => {
  var positiveScore = 0;
  var negativeScore = 0;
  var words = snippet.replace(/[^a-zA-Z\d\s]/g, '').split(' ');
  var uniqueWords = {};
  var uniqueWordsCount = 0;

  //get unique words
  for (var i = 0; i < words.length; i++) {
    if (!uniqueWords.hasOwnProperty(words[i])) {
      uniqueWords[words[i]] = true;
      uniqueWordsCount++;
    }
  }

  //check if word in sentiment dictionary
  for(var word in uniqueWords) {
    word = word.toUpperCase();
    if (dict.hasOwnProperty(word)) {
      if (dict[word]) {
        positiveScore++;
      } else {
        negativeScore++;
      }
    }
  }

  //get scores as percentage of unique words
  positiveScore *= 100;
  negativeScore *= 100;
  positiveScore /= uniqueWordsCount;
  negativeScore /= uniqueWordsCount;

  return {
    positive: positiveScore,
    negative: negativeScore,
    net: positiveScore - negativeScore
  };
}