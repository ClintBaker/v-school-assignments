import { useState } from "react";
import { createBounty } from "../api/bounty";

export default function BountyForm({ setBounties }) {
  const formDefault = {
    firstName: "",
    lastName: "",
    status: "",
    bountyAmount: "",
    type: "",
  };
  const [formData, setFormData] = useState(formDefault);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    createBounty(formData, setBounties);

    setFormData(formDefault);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={formData.firstName}
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        name="lastName"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      />
      <input
        name="status"
        value={formData.status}
        placeholder="Status"
        onChange={handleChange}
      />
      <input
        name="bountyAmount"
        value={formData.bountyAmount}
        placeholder="Bounty Amount"
        onChange={handleChange}
      />
      <input
        name="type"
        value={formData.type}
        placeholder="Type"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
