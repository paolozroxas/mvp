import React from 'react';
import { connect } from 'react-redux';

var Search = (props) => {
  if (props.isLoading) {
    return <div></div>;
  } else {
    return (
      <div className="search flexbox-row">
        <div className="exchange flexbox-column">{props.company.stock.StockExchange}:</div>
        <div className="ticker flexbox-column">{props.company.stock.Symbol}</div>
        <div className="company-name flexbox-column">{props.company.stock.Name}</div>
        <div className="search-bar flexbox-row">
          <input type="text" placeholder="Ticker..."></input>
          <div className="search-button">Get Scores</div>
        </div>
      </div>
    );
  }
};

var mapStateToProps = (state) => {
  return {
    company: state.company,
    companyIsLoading: state.companyIsLoading
  };
};

export default connect(mapStateToProps, null)(Search);
