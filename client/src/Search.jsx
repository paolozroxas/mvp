import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="search flexbox-row">
        <div className="exchange flexbox-column">{this.props.exchange}:</div>
        <div className="ticker flexbox-column">{this.props.ticker}</div>
        <div className="company-name flexbox-column">{this.props.name}</div>
        <div className="search-bar flexbox-row">
          <input type="text" placeholder="Ticker..."></input>
          <div className="search-button">Get Scores</div>
        </div>
      </div>
    )
  }
}

export default Search;
