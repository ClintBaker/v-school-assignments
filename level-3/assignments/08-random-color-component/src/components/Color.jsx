import { useState, useEffect } from "react";
import axios from "axios";

function Color() {
  const [color, setColor] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
      )
      .then((res) => {
        if (res.status === 200) {
          setColor(res.data.colors[0].hex);
        } else {
          alert("error with api");
        }
      });
  }, []);

  function handleClick() {
    axios
      .get(
        `https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
      )
      .then((res) => {
        if (res.status === 200) {
          setColor(res.data.colors[0].hex);
        } else {
          alert("error with api");
        }
      });
  }

  return (
    <>
      <div
        style={{ backgroundColor: `#${color}` }}
        className="color--box"
      ></div>
      <span className="color">Hex color: #{color}</span>
      <button className="change" onClick={handleClick}>
        Change color
      </button>
    </>
  );
}

export default Color;
