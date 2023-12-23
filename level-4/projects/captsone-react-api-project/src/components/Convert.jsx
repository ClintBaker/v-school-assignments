import { useState } from "react";

function Convert({ conversionValues }) {
  const [usd, setUsd] = useState({
    usd: 0,
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setUsd((prevUsd) => ({
      ...prevUsd,
      [name]: value,
    }));
  }
  return (
    <>
      {/* <div className="buttons">
        <button className="btn">USD to Crypto</button>
        <button className="btn">Crypto to USD</button>
      </div> */}
      <div className="container">
        <h2>Convert USD to Crypto</h2>
        <div className="form">
          <label htmlFor="usd">Enter Total Amount in USD</label>
          <input
            className="input"
            onChange={handleChange}
            id="usd"
            placeholder="amount in USD"
            type="number"
            name="usd"
            value={usd.usd}
            step={100}
          />
        </div>
        <div className="feature">
          <p>With ${Number(usd.usd).toLocaleString()} you can buy:</p>
          <div className="conversions">
            <div className="pair"></div>
            <div className="pair">
              <span>BTC:</span>{" "}
              {(conversionValues.btc.perDollar * usd.usd).toFixed(4)}
            </div>
            <div className="pair">
              <span>ETH:</span>
              {(conversionValues.eth.perDollar * usd.usd).toFixed(4)}
            </div>
            <div className="pair">
              <span>LTC:</span>
              {(conversionValues.ltc.perDollar * usd.usd).toFixed(4)}
            </div>
            <div className="pair">
              <span>DOGE:</span>
              {(conversionValues.doge.perDollar * usd.usd).toFixed(4)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Convert;
