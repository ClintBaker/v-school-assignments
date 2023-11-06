// 1.
function doubleNumbers(nums) {
  const doubled = nums.map((num) => {
    return num * 2;
  });

  return doubled;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2.
function stringItUp(arr) {
  const strings = arr.map((num) => {
    return `${num}`;
  });
  return strings;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3.
function capitalizeNames(arr) {
  const caps = arr.map((name) => {
    let str = "";
    for (let i = 0; i < name.length; i++) {
      if (i === 0) {
        str += name[i].toUpperCase();
      } else {
        str += name[i].toLowerCase();
      }
    }

    return str;
  });

  return caps;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4.
