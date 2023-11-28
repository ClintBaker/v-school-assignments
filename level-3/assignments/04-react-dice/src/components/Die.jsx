import { useEffect, useState } from "react";

function Die({ num, handleClick, index, frozen }) {
  const [color, setColor] = useState("blue");

  useEffect(() => {
    if (!frozen.includes(index)) {
      setColor("blue");
    }
  }, [frozen]);

  function divClicked() {
    handleClick(index);
    setColor("purple");
  }
  return (
    <div className="die" onClick={divClicked} style={{ color }}>
      {num}
    </div>
  );
}

export default Die;
