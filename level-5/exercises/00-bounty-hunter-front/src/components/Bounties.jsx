import { useEffect, useState } from "react";
import Bounty from "./Bounty";
import axios from "axios";

export default function Bounties() {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    const getBounties = async () => {
      const res = await axios.get("http://localhost:3002/bounty");
      setBounties(res.data.data);
    };

    getBounties();
  }, []);

  return (
    <div>
      <h2>Bounties:</h2>
      {bounties.map((bounty) => (
        <Bounty key={bounty._id} {...bounty} />
      ))}
    </div>
  );
}
