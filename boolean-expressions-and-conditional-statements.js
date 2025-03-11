/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = false;
const hasCompass = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village using your map.");
} else if (choice === "village" && !hasMap) {
  console.log("Without a map, you get lost and wander in circles.");
} else {
  console.log ("You decide to stay where you are.");
}

console.log("You encounter a wild animal on your journey.");
const action = readline.question("Do you want to fight with a 'sword' or run with a 'compass'?");

if (action === "sword" && hasSword) {
  console.log("You fight the wild animal and win with your sword!");
} else if (action === "sword" && !hasSword) {
  console.log("You don't have a sword! The wild animal overwhelms you.");
} else if (action === "compass" && hasCompass) {
  Cconsole.log("You use the compass to find a safe escape route.");
} else if (action === "compass" && !hasCompass) {
  console.log("Without a compass, you get lost and are surrounded by danger.");
} else {
  console.log("You stand still, unsure of what to do.");
 }
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/