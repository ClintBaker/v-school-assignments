// Colors
// black;
// red;
// green;
// yellow;
// blue;
// magenta;
// cyan;
// white;

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

// Post game stats
console.log(
  chalk.redBright.bgBlack(
    `You finished with ${chalk.magentaBright.underline(
      steps
    )} total steps.  You defeated ${chalk.magentaBright.underline(
      enemiesDefeated
    )} enemies.`
  )
);
