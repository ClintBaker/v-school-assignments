import ColorInput from "./ColorInput";

function Form({ formData, handleFormData }) {
  return (
    <div className="sub--container form--container">
      <h2>Options</h2>
      <form className="form">
        <ColorInput
          handleFormData={handleFormData}
          name="color1"
          val={formData.color1}
        />
        <ColorInput
          handleFormData={handleFormData}
          name="color2"
          val={formData.color2}
        />
        <div className="input--angle">
          <label for="angle">angle</label>
          <input
            type="number"
            id="angle"
            name="angle"
            min="0"
            max="360"
            value={formData.angle}
            onChange={handleFormData}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
