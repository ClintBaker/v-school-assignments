import { useState } from "react";
import Preview from "./components/Preview";
import Form from "./components/Form";

function App() {
  const [formData, setFormData] = useState({
    color1: "#eaeaea",
    color2: "#f50000",
    angle: "32",
  });

  function handleFormData(e) {
    const { value, name } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <>
      <nav className="nav">
        <h1>CSS Gradient Generator Tool</h1>
      </nav>
      <div className="container">
        <Preview formData={formData} />
        <Form formData={formData} handleFormData={handleFormData} />
      </div>
    </>
  );
}

export default App;
