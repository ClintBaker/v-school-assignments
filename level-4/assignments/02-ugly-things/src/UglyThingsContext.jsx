import { useState, createContext, useEffect } from "react";
import {
  deleteThing,
  editThing,
  getAllThings,
  postData,
} from "./handlers/handlers";

const UglyThingsContext = createContext();

function UglyThingsContextProvider(props) {
  const [uglyThings, setUglyThings] = useState([]);

  // on load hit db and grab ugly things
  useEffect(() => {
    getAllThings(setUglyThings);
  }, []);

  const createUglyThing = (formData) => {
    postData(formData, setUglyThings);
  };

  const deleteUglyThing = (id) => {
    deleteThing(id, setUglyThings);
  };

  const editUglyThing = (id, formData) => {
    editThing(id, formData, setUglyThings);
  };

  return (
    <UglyThingsContext.Provider
      value={{ uglyThings, createUglyThing, deleteUglyThing, editUglyThing }}
    >
      {props.children}
    </UglyThingsContext.Provider>
  );
}

export { UglyThingsContext, UglyThingsContextProvider };
