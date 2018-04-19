import React from 'react';
import { connect } from 'react-redux';
import { companyIsLoading } from '../actions/company.js';
import companyGetData from '../actions/companyGetData.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  searchInputHandler(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  searchSubmitHandler(event) {
    this.props.changeCompanyIsLoading(true);
    event.preventDefault();
    this.props.companyGetData(this.state.searchInput);
    this.setState({
      searchInput: ''
    });
  }

  render() {
    return (
      <div className="search flexbox-row">
        <div className="exchange flexbox-column">{this.props.exchange}:</div>
        <div className="ticker flexbox-column">{this.props.ticker.toUpperCase()}</div>
        <div className="company-name flexbox-column">{this.props.name}</div>
        <form className="search-bar flexbox-row" onSubmit={this.searchSubmitHandler.bind(this)}>
          <input
            type="text"
            placeholder="Ticker..."
            value={this.state.searchInput}
            onChange={this.searchInputHandler.bind(this)}/>
          <input
            type="submit"
            className="search-button"
            value={this.props.companyIsLoading ? "Loading..." : "Get Scores"}/>
        </form>
      </div>
    );
  }
};

var mapStateToProps = (state) => {
  return {
    name: state.company.stock.Name,
    ticker: state.company.stock.Symbol,
    exchange: state.company.stock.StockExchange,
    companyIsLoading: state.companyIsLoading
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    companyGetData: (ticker) => dispatch(companyGetData(ticker)),
    changeCompanyIsLoading: (bool) => dispatch(companyIsLoading(bool))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
