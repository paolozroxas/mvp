import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="search">
        <div className="exchange">{this.props.exchange}:</div>
        <div className="ticker">{this.props.ticker}</div>
        <div className="company-name">{this.props.name}</div>
        <div className="searchbar">
          <input type="text" default="Ticker..."></input>
          <div className="search-button"></div>
        </div>
      </div>
    )
  }
}

export default Search;
