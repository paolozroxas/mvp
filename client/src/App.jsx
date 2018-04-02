import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    var ticker = location.pathname.substring(1, location.pathname.length -1);
    this.getData(ticker);
  }

  getData(ticker) {
    console.log('getting', ticker)
    axios.get(`${this.props.server}/api/${ticker}`)
    .then(result => {
      console.log('data is', result.data);
    })
  }

  render() {
    return (
      <div className="app">
        <Title/>
      </div>
    );
  }
}

export default App;
