import { useState, createContext, useEffect } from "react";
import { getAllThings, postData } from "./handlers/handlers";

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

  const deleteUglyThing = () => {
    console.log("DELETING UGLY THING");
  };

  const editUglyThing = () => {
    console.log("EDITING UGLY THING");
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
