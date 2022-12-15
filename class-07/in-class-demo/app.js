// document.write("this is from the file ....");

// Anatomy of a function

// Function DECLARATION (declaring a function, creating it)
// function nameOfFunction(parameters){code to be executed; code to execute; code to execute;}

// function nameOfFunction(parameters){
//    code to execute;
//    code to execute;
// }

// FUNCTION EXPRESSION <-- don't use this right now, not in 102
let newFunction = function (){
  console.log("Hi from the new function");
}

// Invoking/calling a function (using it)
newFunction();

//                        Parameters -- extra information the function will need
// function addTwoNumbers(num1, num2){
//   let sum = num1 + num2;
//   console.log(sum);
//   return sum;
// }

//              Arguments -- the actual data the function will use when it executes
// addTwoNumbers(42, 54);

function greetUser(){
  let name = prompt("What is your name?");
  document.write("Hi, " + name);
  return name;
}

// Store the result of a function in a new variable to be able to use it later
let usersName = greetUser();

function userAge(){
  let age = prompt("How old are you?");
  if (age > 21) {
    document.write("Welcome to adulthood, pay taxes");
  } else {
    window.location.href = "http://www.google.com";
    // document.write("Enjoy the freeloading, kid.")
  }
}
