import { useState } from "react";
import Bounties from "./components/Bounties";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Bounty Hunter</h1>
      <Bounties />
    </>
  );
}

export default App;
