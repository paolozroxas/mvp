import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var server = 'http://127.0.0.1:3000';

ReactDOM.render(<App server={server}/>, document.getElementById('container'));
