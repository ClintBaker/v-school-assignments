import { deleteBounty } from "../api/bounty";

export default function Bounty({
  firstName,
  lastName,
  living,
  bountyAmount,
  type,
  _id,
  setBounties,
}) {
  function handleDelete() {
    deleteBounty(_id, setBounties);
  }
  return (
    <div className="bounty">
      <span>{firstName + " " + lastName}</span>
      <span>{living ? "Alive" : "Dead"}</span>
      <span>${bountyAmount.toLocaleString()}</span>
      <span>{type}</span>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
