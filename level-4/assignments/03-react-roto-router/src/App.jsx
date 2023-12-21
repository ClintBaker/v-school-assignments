import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <nav className="nav">
          <h1>React Roto Router</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
          </div>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <footer className="footer">ALL RIGHTS RESERVED</footer>
      </Router>
    </>
  );
}

export default App;
