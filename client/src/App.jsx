import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import Search from './Search.jsx';
import Stock from './Stock.jsx';
import Sentiment from './Sentiment.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
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
      this.setState({ loading: false, company: result.data });
      console.log('data is', result.data);
    })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app flexbox-column">
          <Title/>
          <Search name={this.state.company.stock.Name}
            ticker={this.state.company.stock.Symbol}
            exchange={this.state.company.stock.StockExchange}
          />
          <div className="main flexbox-row">
            <Stock stock={this.state.company.stock}/>
            <Sentiment tweets={this.state.company.tweets}
              scores={this.state.company.scores}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
