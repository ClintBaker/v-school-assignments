import { useState } from "react";
import Bounties from "./components/Bounties";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="bounty--nav">
        <h1>💰🛸 Bounty Hunter App</h1>
      </nav>
      <Bounties />
    </>
  );
}

export default App;
