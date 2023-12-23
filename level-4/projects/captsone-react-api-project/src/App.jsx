import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Convert from "./components/Convert";
import { getConversionData } from "./handlers/handlers";
import Details from "./components/Details";

function App() {
  const [conversionValues, setConversionValues] = useState({
    btc: { price: 44000, perDollar: 0.00002 },
    eth: { price: 2000, perDollar: 0.0004 },
    ltc: { price: 73, perDollar: 0.01 },
    doge: { price: 0.095, perDollar: 10.421 },
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const data = await getConversionData();
      setConversionValues(data);
    }

    getData();
  }, []);

  function handleNavigate() {
    navigate("/");
  }

  return (
    <>
      <nav className="nav">
        <h1 style={{ cursor: "pointer" }} onClick={handleNavigate}>
          Cryptocurrency Converter
        </h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/convert">Convert</Link>
          <Link to="/details">Details</Link>
        </div>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/convert"
            element={<Convert conversionValues={conversionValues} />}
          />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
      <footer className="footer">
        <div>
          <h3>Cryptocurrency Converter</h3>
        </div>
      </footer>
    </>
  );
}

export default App;
