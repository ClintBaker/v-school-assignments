import axios from "axios";

export const getAllThings = async (setUglyThings) => {
  const res = await axios.get("https://api.vschool.io/ClintBaker/thing");
  // set ugly things to the res.data value (array of ugly things)
  console.log(res);
  setUglyThings(res.data);
};

export const postData = async (formData, setUglyThings) => {
  const data = {
    title: formData.title,
    description: formData.description,
    imgUrl: formData.img,
  };
  // post new data to API
  const res = await axios.post("https://api.vschool.io/ClintBaker/thing", data);

  if (res.status === 200) {
    // If successful getAllThings to keep state in sync with db
    getAllThings(setUglyThings);
  } else {
    // Error handling
    alert("Error creating Ugly Thing");
  }
};
