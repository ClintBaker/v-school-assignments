function Preview({ formData }) {
  return (
    <div className="sub--container preview">
      <div
        style={{
          background: `linear-gradient(${formData.angle}deg, ${formData.color1} , ${formData.color2})`,
        }}
        className="preview--square"
      ></div>
      <div className="preview--text">
        <span>
          background:
          {` linear-gradient(${formData.angle}deg, ${formData.color1} , ${formData.color2});`}
        </span>
        <span>
          -moz-background:
          {` linear-gradient(${formData.angle}deg, ${formData.color1} , ${formData.color2});`}
        </span>
        <span>
          -webkit:
          {` linear-gradient(${formData.angle}deg, ${formData.color1} , ${formData.color2});`}
        </span>
      </div>
    </div>
  );
}

export default Preview;
