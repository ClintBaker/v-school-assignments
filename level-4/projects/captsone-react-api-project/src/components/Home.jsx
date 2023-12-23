import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Welcome to Cryptocurrency Converter!</h2>
      <p>Let's get started converting some crypto!</p>
      <div className="buttons">
        <Link className="btn" to="/usd">
          USD to Crypto
        </Link>
        <Link className="btn" to="/crypto">
          Crypto to USD
        </Link>
      </div>
    </div>
  );
}

export default Home;
