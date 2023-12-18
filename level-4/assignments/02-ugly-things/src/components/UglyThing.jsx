import { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContext";

function UglyThing({ thing }) {
  const [uglyFormData, setUglyFormData] = useState({
    title: thing.title,
    description: thing.description,
    imgUrl: thing.imgUrl,
  });

  const [toggleEdit, setToggleEdit] = useState(false);

  const { deleteUglyThing, editUglyThing } = useContext(UglyThingsContext);

  function handleToggleEdit() {
    // if toggle edit is true, call editUglyThing
    if (toggleEdit) {
      editUglyThing(thing._id, uglyFormData);
    }

    // change toggle edit
    setToggleEdit((prevToggleEdit) => !prevToggleEdit);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUglyFormData((prevUglyFormData) => ({
      ...prevUglyFormData,
      [name]: value,
    }));
  }

  return (
    <div className="ugly-thing">
      {toggleEdit ? (
        <input
          name="title"
          value={uglyFormData.title}
          type="text"
          onChange={handleInputChange}
          className="ugly--input"
        />
      ) : (
        <h3>{thing.title}</h3>
      )}
      {toggleEdit ? (
        <input
          name="description"
          value={uglyFormData.description}
          type="text"
          onChange={handleInputChange}
          className="ugly--input"
        />
      ) : (
        <p>{thing.description}</p>
      )}
      <div className="buttons">
        <button onClick={() => deleteUglyThing(thing._id)} className="btn">
          Delete
        </button>
        <button onClick={handleToggleEdit} className="btn">
          {toggleEdit ? "Save" : "Edit"}
        </button>
      </div>
      <div
        style={{ backgroundImage: `url(${thing.imgUrl})` }}
        className="ugly-thing--img"
      >
        {toggleEdit ? (
          <input
            name="imgUrl"
            value={uglyFormData.imgUrl}
            type="text"
            onChange={handleInputChange}
            className="ugly--input"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UglyThing;
