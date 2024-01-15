import { useState } from "react";
import { deleteBounty } from "../api/bounty";
import BountyForm from "./BountyForm";

export default function Bounty({
  firstName,
  lastName,
  living,
  bountyAmount,
  type,
  _id,
  setBounties,
}) {
  const [editToggle, setEditToggle] = useState(false);

  function handleDelete() {
    deleteBounty(_id, setBounties);
  }

  function handleEdit(e) {
    if (e) {
      e.preventDefault();
    }
    setEditToggle((prevEditToggle) => !prevEditToggle);
  }

  return (
    <>
      {!editToggle ? (
        <>
          <div className="bounty">
            <span>{firstName + " " + lastName}</span>
            <span>{living ? "Alive" : "Dead"}</span>
            <span>${bountyAmount.toLocaleString()}</span>
            <span>{type}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      ) : (
        <BountyForm
          type="edit"
          handleEdit={handleEdit}
          placeholder={{ firstName, lastName, living, bountyAmount, type }}
          setBounties={setBounties}
          id={_id}
        />
      )}
    </>
  );
}
