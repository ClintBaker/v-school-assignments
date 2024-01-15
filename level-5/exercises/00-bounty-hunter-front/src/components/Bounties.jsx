import { useEffect, useState } from "react";
import Bounty from "./Bounty";
import axios from "axios";
import BountyForm from "./BountyForm";
import { getBounties } from "../api/bounty";

export default function Bounties() {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    getBounties(setBounties);
  }, []);

  return (
    <div className="main">
      <h2>Bounties:</h2>
      <br />
      <h4>Create new bounty</h4>
      <div className="bounties--container">
        <div className="bounties">
          <BountyForm type="create" setBounties={setBounties} />
          <br />
          <div className="bounty gray">
            <h4>Name</h4>
            <h4>Status</h4>
            <h4>Bounty Amount</h4>
            <h4>Type</h4>
            <h4>Edit</h4>
            <h4>Delete</h4>
          </div>
          {bounties.map((bounty) => (
            <Bounty setBounties={setBounties} key={bounty._id} {...bounty} />
          ))}
        </div>
      </div>
    </div>
  );
}
