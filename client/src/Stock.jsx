import React from 'react';

var Stock = (props) => {
  return (
    <div className="stock">
      <div className="stock-price">
        <div className="stock-price-value">{props.stock.LastTradePrice}</div>
        <div className="stock-price-currency">USD</div>
        <div className="stock-price-change">
          <div className="stock-price-change-value">{props.stock.Change}</div>
          <div className="stock-price-change-percent">({props.stock.ChangeInPercent}%)</div>
        </div>
      </div>
      <div className="stock-info-list">
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
    </div>
  );
}

export default Stock;
