import { useState } from "react";
import Square from "./Square";

function Board() {
  const [colors, setColors] = useState(["white", "white", "white", "white"]);

  function handleSmall() {
    if (colors[0] === "white") {
      setColors(["black", "black", "black", "black"]);
    } else {
      setColors(["white", "white", "white", "white"]);
    }
  }

  function handleParty() {
    setColors((prevColors) => [
      "purple",
      "purple",
      prevColors[2],
      prevColors[3],
    ]);
  }

  function handlePro(side) {
    if (side === "left") {
      setColors((prevColors) => [
        prevColors[0],
        prevColors[1],
        "blue",
        prevColors[3],
      ]);
    } else {
      setColors((prevColors) => [
        prevColors[0],
        prevColors[1],
        prevColors[2],
        "blue",
      ]);
    }
  }

  function handleBig(num) {
    switch (num) {
      case 1:
        setColors((prevColors) => [
          "green",
          prevColors[1],
          prevColors[2],
          prevColors[3],
        ]);
        break;
      case 2:
        setColors((prevColors) => [
          prevColors[0],
          "yellow",
          prevColors[2],
          prevColors[3],
        ]);
        break;
      case 3:
        setColors((prevColors) => [
          prevColors[0],
          prevColors[1],
          "orange",
          prevColors[3],
        ]);
        break;
      case 4:
        setColors((prevColors) => [
          prevColors[0],
          prevColors[1],
          prevColors[2],
          "pink",
        ]);
        break;
      default:
        break;
    }
  }

  function handleNoise() {
    let beat = new Audio("/assets/beat.mp3");
    beat.play();
  }

  const squares = colors.map((color, i) => {
    return <Square className="square" color={colors[i]} key={i} />;
  });
  return (
    <main className="board">
      <h1>DJ Board</h1>
      <div className="squares">{squares}</div>
      <div className="btns">
        <button onClick={handleSmall} className="btn">
          DJ Small
        </button>
        <button className="btn" onClick={handleParty}>
          Party DJ
        </button>
        <button className="btn" onClick={() => handlePro("left")}>
          Pro Left
        </button>
        <button className="btn" onClick={() => handlePro("right")}>
          Pro Right
        </button>
        <button className="btn" onClick={() => handleBig(1)}>
          Big One
        </button>
        <button className="btn" onClick={() => handleBig(2)}>
          Big Two
        </button>
        <button className="btn" onClick={() => handleBig(3)}>
          Big Three
        </button>
        <button className="btn" onClick={() => handleBig(4)}>
          Big Four
        </button>
        <button className="btn" onClick={handleNoise}>
          Make noise
        </button>
      </div>
      <div className="music">
        Music by{" "}
        <a href="https://pixabay.com/users/alishamusic-39461785/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=170190">
          Alisha
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=170190">
          Pixabay
        </a>
      </div>
    </main>
  );
}

export default Board;
