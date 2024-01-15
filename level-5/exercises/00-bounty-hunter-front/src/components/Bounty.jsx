export default function Bounty({
  firstName,
  lastName,
  living,
  bountyAmount,
  type,
}) {
  return (
    <div className="bounty">
      <span>{firstName + " " + lastName}</span>
      <span>{living ? "Alive" : "Dead"}</span>
      <span>${bountyAmount.toLocaleString()}</span>
      <span>{type}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
