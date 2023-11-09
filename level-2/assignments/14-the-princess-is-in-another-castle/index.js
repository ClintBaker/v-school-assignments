// Create Player class
class Player {
  // Constructor function
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
  }

  //   Set the player's name with a namePicked parameter of mario or luigi
  setName(namePicked) {
    if (namePicked.toLowerCase() === "mario") {
      this.name = "Mario";
    } else {
      this.name = "Luigi";
    }
  }

  //   Switch statement for gotHit that changes player status accordingly
  gotHit() {
    switch (this.status) {
      case "Powered Up":
        this.status = "Big";
        this.hasStar = false;
        break;
      case "Big":
        this.status = "Small";
        break;
      case "Small":
        this.status = "Dead";
        break;
      default:
        this.status = "Dead";
    }
  }

  //   Handle powerups with switch statement
  gotPowerup() {
    switch (this.status) {
      case "Powered Up":
        this.hasStar = true;
        break;
      case "Big":
        this.status = "Powered Up";
        this.hasStar = true;
        break;
      case "Small":
        this.status = "Big";
        break;
      default:
        this.status = "Small";
    }
  }

  //   Add a coin to the total;
  addCoin() {
    this.totalCoins = 1 + this.totalCoins;
  }

  //   Print function
  print() {
    console.log("");
    console.log("PLAYER DETAILS:");
    console.log(`Name: ${this.name}`);
    console.log(`Status: ${this.status}`);
    console.log(`Total Coins: ${this.totalCoins}`);
    console.log(`Star: ${this.hasStar}`);
    console.log("");
  }
}

// Range function that returns a random number between 0 and 2
function range() {
  let random = Math.random();
  if (random < 0.33) {
    return 0;
  } else if (random > 0.33 && random < 0.66) {
    return 1;
  } else {
    return 2;
  }
}

// Create a function that performs actions
function action(player) {
  const intervalId = setInterval(() => {
    if (player.status === "Dead") {
      clearInterval(intervalId);
      console.log("GAME OVER!");
      console.log(`Your final score was ${player.totalCoins}`);
    } else {
      // Get return of range (random number);
      const result = range();
      // Depending on the random num, perform the random action
      switch (result) {
        case 0:
          console.log("You got hit!");
          player.gotHit();
          break;
        case 1:
          console.log("You got a powerup!");
          player.gotPowerup();
          break;
        default:
          console.log("You found a coin!");
          player.addCoin();
      }
      // Log the results
      player.print();
    }
  }, 1500);
}
// Use Player class to create new object
const player = new Player();
// Set the Player's name
player.setName("Mario");
// Play the game
action(player);
