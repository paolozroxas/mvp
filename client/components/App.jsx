import React from 'react';
import Title from './Title.jsx';
import Search from './Search.jsx';
import Stock from './Stock.jsx';
import Sentiment from './Sentiment.jsx';
import { connect } from 'react-redux';
import companyGetData from '../actions/companyGetData.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    var ticker = location.pathname.substring(1, location.pathname.length -1);
    this.props.companyGetData(ticker);
  }

  render() {
    if (this.props.companyIsLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="app flexbox-column">
          <Title/>
          <Search/>
          <div className="main flexbox-row">
            <Stock/>
            <Sentiment/>
          </div>
          <div className="footer">
            <p>McDonald, Bill, and Tim Loughran. “Finance Sentiment Word List from 10-Ks from 1994-2014.” University of Notre Dame, 2013.</p>
            <p>Stock Data from Last10K API, Tweets from Twitter API. Website by Paolo Z. Roxas</p>
          </div>
        </div>
      );
    }
  }
};

var mapStateToProps = (state) => {
  return {
    company: state.company,
    companyIsLoading: state.companyIsLoading,
    companyIsError: state.companyIsError
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    companyGetData: (ticker) => dispatch(companyGetData(ticker))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
