const axios = require('axios');
var keys = require('../config.js');

//deal with & Co OR & Co.
var businessWords = {
  corp: true,
  'corp.': true,
  corporation: true,
  inc: true,
  'inc.': true,
  incorporated: true,
  co: true,
  'co.': true,
  company: true,
  plc: true,
  'plc.': true,
  group: true,
  the: true,

}

module.exports.getStockByTicker = (ticker) => {
  return axios({
    method: 'get',
    url: `https://services.last10k.com/v1/company/${ticker}/quote`,
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.LAST10K_KEY || keys.last10k.primaryKey
    }
  })
  .then(result => {
    var stock = result.data;
    console.log(stock)
    return stock;
  })
  .catch(err => console.error(err));
}
