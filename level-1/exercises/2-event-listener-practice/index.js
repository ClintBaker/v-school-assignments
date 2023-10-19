var square = document.getElementById("square");

square.addEventListener("mouseover", () => {
  square.style.backgroundColor = "blue";
});

square.addEventListener("mousedown", () => {
  square.style.backgroundColor = "red";
});

square.addEventListener("click", () => {
  square.style.backgroundColor = "yellow";
});

square.addEventListener("dblclick", () => {
  square.style.backgroundColor = "green";
});

document.body.onscroll = function () {
  square.style.backgroundColor = "orange";
};

document.body.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "r":
      square.style.backgroundColor = "red";
      break;
    case "o":
      square.style.backgroundColor = "orange";
      break;
    case "g":
      square.style.backgroundColor = "green";
      break;
    case "y":
      square.style.backgroundColor = "yellow";
      break;
    case "b":
      square.style.backgroundColor = "blue";
      break;
    case "p":
      square.style.backgroundColor = "purple";
      alert("You've unlocked a bonus color!");
      break;
    default:
      console.log("You pushed a weird key...");
      break;
  }
});
