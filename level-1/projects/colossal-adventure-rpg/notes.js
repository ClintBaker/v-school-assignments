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
// console.log(
//   chalk.redBright.bgBlack(
//     `You finished with ${chalk.magentaBright.underline(
//       steps
//     )} total steps.  You defeated ${chalk.magentaBright.underline(
//       enemiesDefeated
//     )} enemies.`
//   )

// // FUNCTIONAL
// // import readline
// import readline from "readline-sync";
// // import chalk for coloring terminal
// import chalk from "chalk";

// // Function to determine chance of encounter
// function encounterChance() {
//   // 33% chance
//   if (Math.random() > 0.33) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Determine which enemy you encounter (this also works for inventory items, should be renamed)
// function wildEnemy() {
//   let chance = Math.random();
//   if (chance > 0.33) {
//     return 0;
//   } else if (chance > 0.66) {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// // Determine run survival
// function runSuccess() {
//   if (Math.random() > 0.5) {
//     // Death
//     return false;
//   } else {
//     // Great success
//     return true;
//   }
// }

// // Deal damage
// function dealDamage(dealer, receiver) {
//   let min = 1;
//   let max = dealer.power;

//   let damage = Math.floor(Math.random() * (max - min + 1)) + min;
//   receiver = {
//     ...receiver,
//     hp: receiver.hp - damage,
//   };
//   return {
//     receiver,
//     damage,
//   };
// }

// // Array of enemies
// const enemies = [
//   { name: "Original Zombie", hp: 6, power: 6 },
//   { name: "Tank Zombie", hp: 9, power: 3 },
//   { name: "Power Zombie", hp: 4, power: 8 },
// ];

// // Array of items
// const items = [
//   { name: "HP Boost", hp: 5, power: 0 },
//   { name: "Power Boost", hp: 0, power: 2 },
//   { name: "SUPER BOOST", hp: 10, power: 5 },
// ];

// // 1. Greet player with a fun message
// console.log(
//   chalk.blue.bgCyan(
//     "Welcome to basic 80s RPG!  Your quest is to beat the demons.  Good luck!"
//   )
// );

// // 2. Ask player's name and store it + build character model
// const name = readline.question(chalk.cyan("Please enter your name: "));
// // Build character model with default attributes and no items
// let player = {
//   name,
//   hp: 8,
//   power: 7,
//   items: [{ name: "HP Boost", hp: 5, power: 0 }],
// };
// console.log(chalk.blue(`Welcome to the adventure, ${name}`));

// // Enemies defeated
// let enemiesDefeated = 0;
// // Steps counter
// let steps = 0;
// // Game is active
// let isActive = true;
// // While loop to keep the game going
// while (isActive) {
//   // Walking prompt
//   let walking = readline.keyIn(
//     chalk.cyan(
//       `Press ${chalk.magenta(
//         "w"
//       )} to walk and continue your journey. Press ${chalk.magenta(
//         "p"
//       )} to view player details. Press ${chalk.magenta("i")} to use items.`
//     )
//   );
//   //   If the user selected W
//   if (walking === "w") {
//     // Increment step counter
//     steps++;
//     console.log(
//       chalk.yellow(
//         `You've walked ${chalk.magentaBright(
//           steps
//         )} steps.  You've defeated ${chalk.magentaBright(
//           enemiesDefeated
//         )} enemies.  Keep going to reach a new high score.`
//       )
//     );
//     // 33% chance of encounter
//     let encounter = encounterChance();
//     // If there's an encounter handle that
//     if (encounter) {
//       console.log(chalk.blue("You've been attacked by a wild enemy!"));
//       // Determine which enemy
//       let enemyNum = wildEnemy();
//       //   Define the enemy
//       let enemy = { ...enemies[enemyNum] };
//       let run = false;
//       let first = true;
//       // While loop for the fight
//       while (enemy.hp > 0 && player.hp > 0 && !run) {
//         // Handle dialogue for fight
//         if (!first) {
//           console.log(chalk.blue("The fight continues!"));
//           console.log(
//             chalk.yellow(`You have ${chalk.magentaBright(player.hp)} HP!`)
//           );
//           console.log(
//             chalk.yellow(
//               `${chalk.magentaBright(enemy.name)} has ${chalk.magentaBright(
//                 enemy.hp
//               )} HP`
//             )
//           );
//           // Set first to false so this doesn't repeat.
//         } else {
//           console.log(
//             chalk.blue(
//               `${chalk.magentaBright(
//                 enemy.name
//               )} is rapidly approaching!  You have ${chalk.magentaBright(
//                 player.hp
//               )} HP.`
//             )
//           );
//         }
//         first = false;
//         //   Prompt
//         const prompt = readline.keyInSelect(
//           ["run", "attack"],
//           chalk.cyan("What's your next move?")
//         );
//         // Run choice
//         if (prompt === 0) {
//           // Set run to true
//           run = true;
//           console.log(chalk.blue("You chose to run!  Best of luck!"));
//           // Chance of success
//           const success = runSuccess();
//           // Handle run chances
//           if (success) {
//             console.log(chalk.blue("You made it out!  Congrats!"));
//           } else {
//             // Game over message
//             console.log(
//               chalk.redBright.bgBlack(
//                 "You were devoured by the demons!  GAME OVER you coward!"
//               )
//             );
//             // Post game stats
//             console.log(
//               chalk.redBright.bgBlack(
//                 `You finished with ${chalk.magentaBright.underline(
//                   steps
//                 )} total steps.  You defeated ${chalk.magentaBright.underline(
//                   enemiesDefeated
//                 )} enemies.`
//               )
//             );
//             //   End the game / you lose
//             isActive = false;
//           }
//           //   Fight choice:
//         } else if (prompt === 1) {
//           console.log(chalk.blue("You chose to fight!"));
//           //   Function for player giving damage
//           let damageReturn = dealDamage(player, enemy);
//           // Update enemy object from the damage received
//           enemy = damageReturn.receiver;
//           console.log(
//             chalk.green(
//               `You dealt ${chalk.magentaBright(damageReturn.damage)} damage!`
//             )
//           );
//           // If the enemy is still alive they hit back
//           if (enemy.hp > 0) {
//             // Function for player receiving damage
//             let damageReturn2 = dealDamage(enemy, player);
//             // update player from the damage received
//             player = damageReturn2.receiver;
//             console.log(
//               chalk.red(
//                 `${chalk.magentaBright(enemy.name)} dealt ${chalk.magentaBright(
//                   damageReturn2.damage
//                 )} damage!`
//               )
//             );
//             if (player.hp < 1) {
//               console.log(
//                 chalk.redBright.bgBlack(
//                   `You were defeated in battle.  Great try.  GAME OVER!`
//                 )
//               );
//               console.log(
//                 chalk.redBright.bgBlack(
//                   `You finished with ${chalk.magentaBright.underline(
//                     steps
//                   )} steps and you defeated ${chalk.magentaBright.underline(
//                     enemiesDefeated
//                   )} enemies.`
//                 )
//               );
//               isActive = false;
//             }
//           } else {
//             // DEFEAT ENEMY
//             console.log(
//               chalk.green(
//                 `You've defeated enemy: ${chalk.magentaBright(
//                   enemy.name
//                 )}.  Great job!`
//               )
//             );
//             // increment your enemies defeated stat
//             enemiesDefeated++;
//             // Give random item
//             let itemNum = wildEnemy();
//             player.items.push(items[itemNum]);
//             console.log(
//               chalk.yellowBright(
//                 `You were given the item ${chalk.magenta(
//                   items[itemNum].name
//                 )}!!  Wow!`
//               )
//             );
//           }
//         } else {
//           // Set run to true
//           run = true;
//           console.log(chalk.blue("CANCEL means run!  Good luck!"));
//           // Chance of success
//           const success = runSuccess();
//           // Handle run chances
//           if (success) {
//             console.log(chalk.blue("You made it out!  Congrats!"));
//           } else {
//             console.log(
//               chalk.redBright.bgBlack(
//                 "You were devoured by the demons!  GAME OVER you coward!"
//               )
//             );
//             console.log(
//               chalk.redBright.bgBlack(
//                 `You finished with ${chalk.magentaBright.underline(
//                   steps
//                 )} total steps.  You defeated ${chalk.magentaBright.underline(
//                   enemiesDefeated
//                 )} enemies.`
//               )
//             );
//             //   End the game / you lose
//             isActive = false;
//           }
//         }
//       }
//     } else {
//       console.log(chalk.blue("Everything looks clear!"));
//     }
//   } else if (walking === "p") {
//     // Handle printing player information
//     console.log(chalk.yellowBright.bgGrey(`PLAYER DETAILS:`));
//     console.log(chalk.yellow(`NAME: ${chalk.magenta(player.name)}`));
//     console.log(chalk.yellow(`HP: ${chalk.magenta(player.hp)}`));
//     console.log(chalk.yellow(`POWER: ${chalk.magenta(player.power)}`));
//     console.log(chalk.green.bgGrey(`INVENTORY ITEMS:`));
//     if (player.items.length > 0) {
//       for (let i = 0; i < player.items.length; i++) {
//         console.log(chalk.green(`${i + 1}: ${player.items[i].name}`));
//       }
//     } else {
//       console.log(chalk.green("You have no items..."));
//     }
//   } else if (walking === "i") {
//     // if items exist
//     if (player.items.length > 0) {
//       // Iterate over items array and reate just an array of names
//       const itemsNames = [];
//       for (let i = 0; i < player.items.length; i++) {
//         itemsNames.push(player.items[i].name);
//       }
//       // Prompt for an item out of the names
//       const inventoryPrompt = readline.keyInSelect(
//         itemsNames,
//         chalk.cyan("Select an inventory item")
//       );

//       if (inventoryPrompt !== -1) {
//         // Do the incrementing with the items
//         player.hp = player.hp + player.items[inventoryPrompt].hp;
//         player.power = player.power + player.items[inventoryPrompt].power;
//         // Alert the player
//         console.log(
//           chalk.yellow(
//             `Your HP increased by ${chalk.magenta(
//               player.items[inventoryPrompt].hp
//             )}`
//           )
//         );
//         console.log(
//           chalk.yellow(
//             `Your Power increased by ${chalk.magenta(
//               player.items[inventoryPrompt].power
//             )}`
//           )
//         );

//         // Remove the item
//         player.items.splice(inventoryPrompt, 1);
//       } else {
//         console.log(chalk.blue("No problem, you can always use items later!"));
//       }
//     } else {
//       console.log(chalk.green(`You don't have any items...`));
//     }
//   } else {
//     console.log(chalk.yellowBright("You gotta walk to beat the game!"));
//   }
// }
