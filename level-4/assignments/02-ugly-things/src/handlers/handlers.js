import axios from "axios";

const url = "https://api.vschool.io/ClintBaker/thing";

export const getAllThings = async (setUglyThings) => {
  const res = await axios.get(url);
  // set ugly things to the res.data value (array of ugly things)
  console.log(res);
  setUglyThings(res.data);
};

export const editThing = async (id, formData, setUglyThings) => {
  const res = await axios.put(`${url}/${id}`, formData);

  if (res.status === 200) {
    getAllThings(setUglyThings);
  } else {
    alert("Unable to update thing");
  }
};

export const deleteThing = async (id, setUglyThings) => {
  const res = await axios.delete(`${url}/${id}`);

  if (res.status === 200) {
    // If successful getAllThings to keep state in sync with db
    getAllThings(setUglyThings);
  } else {
    // Error handling
    alert("Unable to delete thing");
  }
};

export const postData = async (formData, setUglyThings) => {
  const data = {
    title: formData.title,
    description: formData.description,
    imgUrl: formData.img,
  };
  // post new data to API
  const res = await axios.post(url, data);

  if (res.status === 200) {
    // If successful getAllThings to keep state in sync with db
    getAllThings(setUglyThings);
  } else {
    // Error handling
    alert("Error creating Ugly Thing");
  }
};
