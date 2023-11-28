import Die from "./Die";
import { useState } from "react";

function DiceBox() {
  const [nums, setNums] = useState(() => {
    let numArr = [];
    for (let i = 0; i < 5; i++) {
      numArr.push(Math.ceil(Math.random() * 6));
    }
    return numArr;
  });

  const [frozen, setFrozen] = useState([]);

  function handleRoll() {
    if (frozen.length <= 3) {
      let numArr = [];
      for (let i = 0; i < 5; i++) {
        if (!frozen.includes(i)) {
          numArr.push(Math.ceil(Math.random() * 6));
        } else {
          numArr.push(nums[i]);
        }
      }

      setNums(numArr);
    } else {
      setFrozen([]);
      let numArr = [];
      for (let i = 0; i < 5; i++) {
        numArr.push(Math.ceil(Math.random() * 6));
      }

      setNums(numArr);
    }
  }

  function handleClick(index) {
    if (!frozen.includes(index)) {
      setFrozen((prevFrozen) => [...prevFrozen, index]);
    }
  }

  return (
    <div>
      <h1>Dice Box</h1>
      <div className="die--container">
        <Die
          frozen={frozen}
          index={0}
          num={nums[0]}
          handleClick={handleClick}
        />
        <Die
          frozen={frozen}
          index={1}
          num={nums[1]}
          handleClick={handleClick}
        />
        <Die
          frozen={frozen}
          index={2}
          num={nums[2]}
          handleClick={handleClick}
        />
        <Die
          frozen={frozen}
          index={3}
          num={nums[3]}
          handleClick={handleClick}
        />
        <Die
          frozen={frozen}
          index={4}
          num={nums[4]}
          handleClick={handleClick}
        />
      </div>
      <button onClick={handleRoll}>ROLL!</button>
    </div>
  );
}

export default DiceBox;
