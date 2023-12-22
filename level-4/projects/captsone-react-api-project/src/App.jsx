import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cryptocurrency from "./components/Cryptocurrency";
import USD from "./components/USD";
import { getConversionData } from "./handlers/handlers";

function App() {
  const [conversionValues, setConversionValues] = useState({
    btc: { price: 44000, perDollar: 0.00002 },
    eth: { price: 2000, perDollar: 0.0004 },
    ltc: { price: 73, perDollar: 0.01 },
    doge: { price: 0.095, perDollar: 10.421 },
  });

  useEffect(() => {
    async function getData() {
      const data = await getConversionData();
      setConversionValues(data);
    }

    // getData();
  }, []);

  return (
    <>
      <Router>
        <nav className="nav">
          <h1>Cryptocurrency Converter</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/usd">USD to Crypto</Link>
            <Link to="/crypto">Crypto to USD</Link>
          </div>
        </nav>
        <main className="main">
          <p>BTC PRICE:</p>
          <div>{conversionValues.btc.price}</div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usd" element={<USD />} />
            <Route path="/crypto" element={<Cryptocurrency />} />
          </Routes>
        </main>
        <footer className="footer">
          ALL RIGHTS RESERVED Cryptocurrency Converter
        </footer>
      </Router>
    </>
  );
}

export default App;
