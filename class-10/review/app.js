'use strict';

console.log("Hello world");

// STRUCTURE OF A FUNCTION:

//               parameters -- extra information the function will expect
function multiplyNumbers(num1, num2){
  // code to execute goes in curly brackets/braces
  return (num1 * num2)
}

// console.log(multiplyNumbers(5, 4));

let product1 = multiplyNumbers(2, 2) // 4
let product2 = multiplyNumbers(3, 3) // 9

console.log(multiplyNumbers(product1, product2));

function guessColor(){
  let myFav = "yellow";
  let response = prompt("What is my fav color?");

  if (response != myFav){
    guessColor();
  } else { 
    console.log("You're right!");
  }
}

guessColor();
// console.log(guessColor);
console.log("I am in the last log", guessNumber);

