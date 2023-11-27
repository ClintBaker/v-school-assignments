import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("pink");
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith",
    },
  ]);
  const [colors, setColors] = useState(["pink", "blue"]);
  const [countObject, setCountObject] = useState({
    count: 0,
  });
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
  });

  function handleClick() {
    setColor((prevColor) => (prevColor === "blue" ? "pink" : "blue"));

    // 3.
    setColors((prevColors) => [...prevColors, "green"]);

    // 4.
    setCountObject((prevState) => ({ count: prevState.count + 1 }));

    // 5.
    setPerson((prevPerson) => {
      return {
        ...prevPerson,
        age: 30,
      };
    });

    // 6.
    setColors((prevColors) => [...prevColors, "banana"]);
  }

  return (
    <>
      <h1 style={{ backgroundColor: color }}>1. Toggle color</h1>
      <button onClick={handleClick}>Toggle</button>
      <div>
        <h1>2. People array</h1>
        {people.map((person) => {
          return (
            <h3 key={person.firstName + person.lastName + Math.random() * 4000}>
              {person.firstName} {person.lastName}
            </h3>
          );
        })}
      </div>
      <button
        onClick={() =>
          setPeople((prev) => {
            return [...prev, { firstName: "New", lastName: "Guy" }];
          })
        }
      >
        Add people
      </button>
    </>
  );
}

export default App;
