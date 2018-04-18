import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/company.js';

var store = configureStore({
  company: {},
  companyIsLoading: true,
  companyIsError: false
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container')
);
