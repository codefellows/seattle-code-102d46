// NOTES FROM REPLIT

// Structure of a WHILE loop:
// while(this condition evaluates to true){execute this code;}

// More readable:
// while(true){
//   execute this code;
// }

// let x = 1;
// while (x < 10){
//   console.log(x);
//   x += 1;
// }

// Let's have the user guess the correct number.
// Worst case, we think they'll need 5 guesses.
// let myNumber = 3;
// let usersGuess = prompt("Guess my number between 1 & 5");

// THIS IS THE BRUTE FORCE WAY TO GIVE THEM 5 GUESSES.
// IT WILL GIVE THEM 5 REGARDLESS IF THEY ARE RIGHT OR WRONG:

// if (usersGuess !== myNumber) {
//   usersGuess = prompt("Guess a number between 1 & 5");
//   if (usersGuess !== myNumber) {
//     usersGuess = prompt("Guess a number between 1 & 5");
//     if (usersGuess !== myNumber) {
//       usersGuess = prompt("Guess a number between 1 & 5");
//       if (usersGuess !== myNumber) {
//         usersGuess = prompt("Guess a number between 1 & 5");
//       }
//     }
//   }
// }

// OR we can create a while loop to execute until they get it right.
while (usersGuess != myNumber){
  usersGuess = prompt("Wrong, guess again! A number between 1 & 5.");
}

// ---------------------------------------------------------------------

// Structure of a FOR LOOP:
// for(initial value; condition to evaluate; increment){code to execute}

// More readable: 
// for (initial; condition; increment){
//   code to execute;
// }

// Let's say I want to say "hi" to each of my students:

let students = 10;

for(let i = 1; i <= students; i += 1){
  console.log("Hi student #" + i);
}

//   i = 1 | 1 <= 10 ? T | execute | i = 2
//   i = 2 | 2 <= 10 ? T | execute | i = 3
//   i = 3 | 3 <= 10 ? T | execute | i = 4
//   i = 4 | 4 <= 10 ? T | execute | i = 5
//   i = 5 | 5 <= 10 ? T | execute | i = 6
//   i = 6 | 6 <= 10 ? T | execute | i = 7
//   i = 7 | 7 <= 10 ? T | execute | i = 8
//   i = 8 | 8 <= 10 ? T | execute | i = 9
//   i = 9 | 9 < 10 ? T  | execute | i = 10
// i = 10 | 10 <= 10 ? T | execute | i = 11
// i = 11 | 11 <= 10 ? F --> BREAK LOOP

// COMPARISON OPERATORS - comparing one thing against another
// < -- left side is less than right side
// > -- left side is greater than right side
// <= -- left side is less than OR equal to right side
// >= -- left side is greater than OR equal to right side

// LOGICAL OPERATORS
// Logical AND --> && -- left & right side BOTH evaluate to TRUE
// Logical OR --> || -- either left/right OR both sides evaluate to TRUE
// Logical NOT --> ! -- opposite
//   -- (!true) is false 
//   -- (!false) is true
//   -- (5 != 10) evaluates to true
//       -- (5 is NOT loosely equal to 10)
//   -- (5 !== '5') evaluates to true 
//       -- (a number is NOT strictly equal to a string)


let userNum = prompt("Pick a number! (Between 1 & 5 please)");

for(let i = 0; i < userNum; i++){
  document.write("<img src='embarrassing.jpeg' alt='Silly meme' />");
}
