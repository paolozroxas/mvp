import React from 'react';
import { connect } from 'react-redux';

var Stock = (props) => {
  return (
    <div className="stock flexbox-column">
      <div className="stock-price flexbox-row">
        <div className="stock-price-value">{props.stock.LastTradePrice}</div>
        <div className="stock-price-currency">USD</div>
      </div>
      <div className="stock-price-change flexbox-row">
        <div className="stock-price-change-value">{props.stock.Change}</div>
        <div className="stock-price-change-percent">({props.stock.ChangeInPercent}%)</div>
      </div>
      <div className="stock-info-list flexbox-column">
        <div className="stock-info-list-element">
          <div>Volume:</div>
          <div>{props.stock.Volume}</div>
        </div>
        <div className="stock-info-list-element">
          <div>Market Cap:</div>
          <div>{props.stock.MarketCapitalization}</div>
        </div>
        <div className="stock-info-list-element">
          <div>Year High:</div>
          <div>{props.stock.YearlyHigh}</div>
        </div>
        <div className="stock-info-list-element">
          <div>Year Low:</div>
          <div>{props.stock.YearlyLow}</div>
        </div>
        <div className="stock-info-list-element">
          <div>P/E:</div>
          <div>{props.stock.PeRatio}</div>
        </div>
        <div className="stock-info-list-element">
          <div>EBITDA:</div>
          <div>{props.stock.Ebitda}</div>
        </div>
      </div>
      <div className="blurb-title blurb">
        <p>Sentiment Scores Information</p>
      </div>
      <div className="blurb-content blurb">
        <p>Positive scores indicate positive sentiment.</p>
        <p>Negative scores indicate negative sentiment.</p>
        <p>Scores are only meaningful as a relative measure.</p>
        <p>
          Content Score is generated from a Bag of Words algorithm
          using the data of Professors Tim Loughran and Bill McDonald.
        </p>
        <p>
          Influence Score is the Content Score weighted by Favorites
          and Retweets.
        </p>
      </div>
    </div>
  );
}

var mapStateToProps = (state) => {
  return {
    stock: state.company.stock
  };
};

export default connect(mapStateToProps, null)(Stock);
