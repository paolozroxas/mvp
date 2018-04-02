const fs = require('fs');

var words = {};
var count = 0;
var lines = fs.readFileSync('data/words_dataset.csv').toString().split('\n');
for (var i = 1; i < lines.length; i++) {
  var fields = lines[i].split(',');
  if (!(fields[7] !== '0' && fields[8] !== '0')) {
    if (fields[7] !== '0') {
      count++;
      words[fields[0]] = false;
    } else if (fields[8] !== '0') {
      count++;
      words[fields[0]] = true;
    }
  }
}

fs.writeFileSync('data/sentiment_dict.json', JSON.stringify(words));

//Sample Data:
//Word,Sequence Number,Word Count,Word Proportion,Average Proportion,Std Dev,Doc Count,Negative,Positive,Uncertainty,Litigious,Constraining,Superfluous,Interesting,Modal,Irr_Verb,Harvard_IV,Syllables,Source
//ABOLISH,146,9635,6.77E-07,3.84E-07,6.12E-06,7706,2009,0,0,0,0,0,0,0,0,1,3,12of12inf
//index 0 is Word
//index 7 is Negative
//index 8 is Positive
