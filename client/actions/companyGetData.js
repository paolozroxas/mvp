import { company, companyIsLoading, companyIsError } from './company.js';
import axios from 'axios';

var server = 'http://127.0.0.1:3000';

var companyGetData = (ticker) => {
   return (dispatch) => {
     console.log('getting', ticker);
     axios.get(`${server}/api/${ticker}`)
     .then(result => {
       dispatch(company(result.data));
       dispatch(companyIsLoading(false));
       console.log('data is', result.data);
     })
     .catch(err => {
       dispatch(companyIsLoading(false));
       dispatch(companyIsError(true));
     });
   };
};

export default companyGetData;
