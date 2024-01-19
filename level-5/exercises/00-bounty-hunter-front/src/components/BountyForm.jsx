import { useState } from "react";
import { createBounty, editBounty } from "../api/bounty";

export default function BountyForm({
  setBounties,
  placeholder,
  type,
  handleEdit,
  id,
}) {
  const formDefault = {
    firstName: "",
    lastName: "",
    living: true,
    bountyAmount: "",
    type: "jedi",
  };

  const startData = placeholder ? placeholder : formDefault;

  const [formData, setFormData] = useState(startData);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (type === "create") {
      createBounty(formData, setBounties);
      setFormData(formDefault);
    } else if (type === "edit") {
      // put logic
      editBounty(id, formData, setBounties);
      handleEdit();
    }
  }

  return (
    <form className="bounty--form bounty" onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        placeholder="first"
        onChange={handleChange}
      />
      <input
        name="lastName"
        value={formData.lastName}
        placeholder="last"
        onChange={handleChange}
      />
      <select value={formData.living} name="living" onChange={handleChange}>
        <option selected value={true}>
          Alive
        </option>
        <option value={false}>Dead</option>
      </select>
      <input
        name="bountyAmount"
        value={formData.bountyAmount}
        placeholder="amount"
        onChange={handleChange}
      />
      <select value={formData.type} name="type" onChange={handleChange}>
        <option selected value="jedi">
          jedi
        </option>
        <option value="sith">sith</option>
      </select>
      {type === "edit" && <button onClick={handleEdit}>Cancel</button>}
      <button>Submit</button>
    </form>
  );
}
