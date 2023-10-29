const readline = require("readline-sync");

console.log("You're stuck in a room.  Enter the number for your action:");

let stuck = true;
let hasKey = false;

while (stuck) {
  const choice = readline.question(
    "What do you do?  1. Find the key, 2. Put hand in hole, 3. Open the door:  "
  );

  switch (choice) {
    case "1":
      console.log("You got the key!");
      hasKey = true;
      break;
    case "2":
      console.log("You died! GAME OVER.");
      stuck = false;
      break;
    case "3":
      if (hasKey) {
        console.log("You made it out!  Congrats you beat the game!");
        stuck = false;
        break;
      } else {
        console.log("You need the key to open the door!  Get the key first!");
        break;
      }
    default:
      console.log("Weird answer, let's try again");
  }
}
