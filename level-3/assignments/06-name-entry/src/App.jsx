/* 
1. H1
2. Button
  When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered.
3. Ordered list
4. User types names into input box
  When the user types in the input box, the h1 should update to show the same text as the input box.


*/

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    input: "",
    names: [],
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData((prevFormData) => ({
      input: "",
      names: [...prevFormData.names, formData.input],
    }));
  }

  const names = formData.names.map((name) => (
    <li key={name + Math.random() * 1000}>{name}</li>
  ));

  return (
    <div className="master--container">
      <div className="container">
        <div className="input--text">
          <h1>{formData.input}</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            value={formData.input}
            name="input"
            type="text"
            onChange={handleChange}
            placeholder="name"
          />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="names">
        <h2>Names:</h2>
        <ol>{names}</ol>
      </div>
    </div>
  );
}

export default App;
