import React from "react";
import "./Coin.css";

export default function Coin({
  name,
  symbol,
  image,
  price,
  volume,
  priceChange,
  marketCap,
}) {
  let priceChangeDisplay =
    priceChange < 0 ? (
      <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    ) : (
      <p className="coin-percent green"> {priceChange.toFixed(2)}%</p>
    );

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price} Rs.</p>
          <p className="coin-volume">{volume.toLocaleString()} Rs. </p>
          <p className="coin-percent">{priceChangeDisplay}</p>
          <p className="coin-marketcap">
            Mkt Cap: {marketCap.toLocaleString()} Rs.
          </p>
        </div>
      </div>
    </div>
  );
}