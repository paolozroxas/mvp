import { company, companyIsLoading, companyIsError } from './company.js';
import axios from 'axios';

var server = location.origin;

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
       console.error('ERROR:', err);
     });
   };
};

export default companyGetData;
