/* 

1. Greet player with a fun message
2. Ask player's name and store it
3. Walking
    - Enter "w" to walk
    - When you walk, rando algorithm will run that determines if a wild enemy has appeared (1/3 or 1/4 chance of being attacked)
    - Use a while loop
4. If a wild enemey appears
    - The enemy is random (minimum of 3 different types of enemies)
    - The user decides to attack or run
    - If attacking, a random amount of damage will be dealt between a min and max
        - After the player attacks the enemy attacks back for a random damage amount
        - The player and the enemy will attack each other in a loop until one of them passes out or dies.
        - If the player kills an enemy you give the player some HP and special item that is stored in the inventory.  After this the player continues walking (while loop).
        - If the enemy kills the player the console prints a cool death message and the game ends.
    - If running, there is a 50% chance of escaping
5. When the player kills enemies, they are awarded items
    - If the users enter 'Print' or 'p' in the console, the console will print the player's name, HP, and each item in their inventory

*/

const readline = require("readline-sync");

// Function to determine chance of encounter
function encounterChance() {
  // 33% chance
  if (Math.random() > 0.33) {
    return true;
  } else {
    return false;
  }
}

// Determine which enemy you encounter
function wildEnemy() {
  let chance = Math.random();
  if (chance > 0.33) {
    return 0;
  } else if (chance > 0.66) {
    return 1;
  } else {
    return 2;
  }
}

// Determine run survival
function runSuccess() {
  if (Math.random() > 0.5) {
    // Death
    return false;
  } else {
    // Great success
    return true;
  }
}

// Deal damage
function dealDamage(dealer, receiver) {
  let min = 1;
  let max = dealer.power;

  let damage = Math.floor(Math.random() * (max - min + 1)) + min;
  receiver = {
    ...receiver,
    hp: receiver.hp - damage,
  };
  return {
    receiver,
    damage,
  };
}

// Array of enemies
const enemies = [
  { name: "Enemy1", hp: 6, power: 6 },
  { name: "Enemy2", hp: 9, power: 3 },
  { name: "Enemy3", hp: 4, power: 8 },
];

// 1. Greet player with a fun message
console.log(
  "Welcome to basic 80s RPG!  Your quest is to beat the demons.  Good luck!"
);

// 2. Ask player's name and store it + build character model
const name = readline.question("Please enter your name: ");
// Build character model with default attributes and no items
let player = {
  name,
  hp: 8,
  power: 7,
  items: [],
};
console.log(`Welcome to the adventure, ${name}`);

// 3. Walking
//     - Enter "w" to walk
//     - When you walk, rando algorithm will run that determines if a wild enemy has appeared (1/3 or 1/4 chance of being attacked)
//     - Use a while loop

// while this is the true the game is active
// 4. If a wild enemey appears
//     - The enemy is random (minimum of 3 different types of enemies)
//     - The user decides to attack or run
//     - If attacking, a random amount of damage will be dealt between a min and max
//         - After the player attacks the enemy attacks back for a random damage amount
//         - The player and the enemy will attack each other in a loop until one of them passes out or dies.
//         - If the player kills an enemy you give the player some HP and special item that is stored in the inventory.  After this the player continues walking (while loop).
//         - If the enemy kills the player the console prints a cool death message and the game ends.
//     - If running, there is a 50% chance of escaping

// Enemies defeated
let enemiesDefeated = 0;
// Steps counter
let steps = 0;
// Game is active
let isActive = true;
// While loop to keep the game going
while (isActive) {
  // Walking prompt
  let walking = readline.keyIn("Press w to walk and continue your journey.");
  //   If the user selected W
  if (walking === "w") {
    // Increment step counter
    steps++;
    console.log(
      `You've walked ${steps} steps.  You've defeated ${enemiesDefeated} enemies.  Keep going to reach a new high score.`
    );
    // 33% chance of encounter
    let encounter = encounterChance();
    // If there's an encounter handle that
    if (encounter) {
      console.log("You've been attacked by a wild enemy!");
      // Determine which enemy
      let enemyNum = wildEnemy();
      //   Define the enemy
      let enemy = { ...enemies[enemyNum] };
      let run = false;
      let first = true;
      // While loop for the fight
      while (enemy.hp > 0 && player.hp > 0 && !run) {
        // Handle dialogue for fight
        if (first) {
          console.log("The fight continues!");
          console.log(`You have ${player.hp} HP!`);
          console.log(`${enemy.name} has ${enemy.hp}`);
        } else {
          console.log(
            `${enemy.name} is rapidly approaching!  You have ${player.hp} HP.  Decision time!`
          );
        }
        first = false;
        //   Prompt
        const prompt = readline.keyInSelect(
          ["run", "attack"],
          "What's your next move?"
        );
        // Run choice
        if (prompt === 0) {
          // Set run to true
          run = true;
          console.log("You chose to run!  Best of luck!");
          // Chance of success
          const success = runSuccess();
          // Handle run chances
          if (success) {
            console.log("You made it out!  Congrats!");
          } else {
            console.log(
              "You were devoured by the demons!  Game over you coward!"
            );
            console.log(`You finished with ${steps} total steps.`);
            //   End the game / you lose
            isActive = false;
          }
          //   Fight choice:
        } else if (prompt === 1) {
          console.log("You chose to fight!");
          //   Function for player giving damage
          let damageReturn = dealDamage(player, enemy);
          enemy = damageReturn.receiver;
          console.log(
            `You dealt ${damageReturn.damage} damage.  ${enemy.name} now has ${enemy.hp} HP!`
          );
          // If the enemy is still alive they hit back
          if (enemy.hp > 0) {
            // Function for player receiving damage
            let damageReturn2 = dealDamage(enemy, player);
            player = damageReturn2.receiver;
            console.log(
              `${enemy.name} dealt ${damageReturn2.damage} damage.  You now have ${player.hp} HP!`
            );
            if (player.hp < 1) {
              console.log(
                `You were defeated in battle.  Great try.  GAME OVER!`
              );
              console.log(
                `You finished with ${steps} steps and you defeated ${enemiesDefeated} enemies.`
              );
              isActive = false;
            }
          } else {
            console.log(`You've defeated enemy: ${enemy.name}.  Great job!`);
            enemiesDefeated++;
          }
        } else {
          // Set run to true
          run = true;
          console.log("CANCEL means run!  Good luck!");
          // Chance of success
          const success = runSuccess();
          // Handle run chances
          if (success) {
            console.log("You made it out!  Congrats!");
          } else {
            console.log(
              "You were devoured by the demons!  Game over you coward!"
            );
            console.log(`You finished with ${steps} total steps.`);
            //   End the game / you lose
            isActive = false;
          }
        }
      }
    } else {
      console.log("Everything looks clear!");
    }
  } else {
    console.log("You gotta walk to beat the game!");
  }
}
