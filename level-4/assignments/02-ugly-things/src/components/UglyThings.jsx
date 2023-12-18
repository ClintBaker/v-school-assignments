import { useContext } from "react";
import UglyThing from "./UglyThing";
import { UglyThingsContext } from "../UglyThingsContext";

function UglyThings() {
  const { uglyThings } = useContext(UglyThingsContext);

  const uglyThingsJsx = uglyThings.map((thing) => (
    <UglyThing key={thing._id} thing={thing} />
  ));

  return (
    <>
      <div className="heading">
        <h2>My Ugly Things</h2>
      </div>
      <div className="ugly-things--container">
        {uglyThingsJsx.length > 0
          ? uglyThingsJsx
          : "Create ugly things with the form above!"}
      </div>
    </>
  );
}

export default UglyThings;
