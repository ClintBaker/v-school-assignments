import { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContext";

function Form() {
  const { createUglyThing } = useContext(UglyThingsContext);

  const [formData, setFormData] = useState({
    title: "",
    img: `https://picsum.photos/seed/${Math.floor(Math.random() * 99)}/200/200`,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUglyThing(formData);

    setFormData({
      title: "",
      img: "",
      description: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="create--ugly">
        <h2>Create an Ugly Thing!</h2>
        <div className="inputs">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Image"
            value={formData.img}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button className="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
