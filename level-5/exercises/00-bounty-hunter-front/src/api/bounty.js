import axios from "axios";

const url = `http://localhost:3002`;

export const getBounties = async (setBounties) => {
  const res = await axios.get(`${url}/bounty`);
  setBounties(res.data.data);
};

export const createBounty = async (body, setBounties) => {
  const res = await axios.post(`${url}/bounty`, body);
  setBounties((prevBounties) => [...prevBounties, res.data.data]);
};

export const deleteBounty = async (id, setBounties) => {
  const res = await axios.delete(`${url}/bounty/${id}`);
  setBounties((prevBounties) =>
    prevBounties.filter((bounty) => bounty._id !== id)
  );
};

export const editBounty = async (id, body, setBounties) => {
  const res = await axios.put(`${url}/bounty/${id}`, body);
  setBounties((prevBounties) =>
    prevBounties.map((bounty) => {
      if (bounty._id === id) {
        return res.data.data;
      } else {
        return bounty;
      }
    })
  );
};
