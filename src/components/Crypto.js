import React, { useEffect, useState } from "react";
import axios from "axios";

import Coin from "./Coin";

function Crypto() {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .catch((err) =>
          console.log("something went wrong!! Unable to fetch data", err)
        );
      //console.log(response.data);
      setCoin(response.data);
    };
    fetchData();
  }, []);

  console.log(coins);
  console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterdCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  const filterResult = filterdCoins.map((coin) => {
    return (
      <Coin
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        image={coin.image}
        price={coin.current_price}
        volume={coin.total_volume}
        priceChange={coin.price_change_percentage_24h}
        marketCap={coin.market_cap}
      />
    );
  });

  console.log(filterdCoins);

  return (
    <div>
      <h1 className="lead p-5">Search a currency</h1>
      <form>
        <div className="container">
          <input
            className="form-control form-control-lg mb-5"
            type="text"
            placeholder="Search Coins"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </form>
      {filterResult}
    </div>
  );
}

export default Crypto;
