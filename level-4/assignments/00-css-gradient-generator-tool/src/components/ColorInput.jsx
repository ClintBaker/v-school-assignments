function ColorInput({ val, name, handleFormData }) {
  return (
    <div className="input--line">
      <label for={name}>{name}</label>
      <label for={name}>{val}</label>
      <input
        onChange={handleFormData}
        type="color"
        name={name}
        id={name}
        value={val}
      />
    </div>
  );
}

export default ColorInput;
