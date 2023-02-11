//  VARIABLES

var lowerCase = "abcdefghijklmnopqrstuvwxyz" // lowerCase 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase 
var numbers = "1234567890"; //Stricly numbers 
var characters = "!@#$%^&*()_+'"; //All characters 
var randomSelection;
var length;

// target id (generate) element 
var generateBtn = document.querySelector("#generate");

function newPassword() {
  var password = generateNewPassword();
  var passwordCharacters = document.querySelector("#password");
}

//Password parameters 

function generateNewPassword();
length = prompt("Enter the lenght of characters you would like for your new password *Number between 8 - 128*");
if (!lengh) {
  alert("Please try again! ")

} else if (lenght < 8 || lenght > 128) {
  length = prompt("New password must contain a number from 8 - 128");

} else {
  numbers = confirm("Incude numbers in your password");
  upperCase = confirm("Include the amount of upper case letters");
  lowerCase = confirm("Iclude the amount of lower case letters");
  characters = confirm("include the amount of characters in your password")
}








//BUTTON PRESS TO GENERATE A PASSWORD 

// function generatePassword()[

//   length = prompt("Enter the number of characters you would like in your password *between 8 -28*");
// if length 
// ]

















// var click = document.getElementById("generate");
// click.addEventListener("click", "generate");
// functiondemo();

// var generateBtn = document.getElementById("#generate")[0];
// generate.addEventListener("click", function (event)) {
//   alert("Choose a length of characters from 8 to 128");
// }









// Assignment Code



// Declaring the variables


// PROMPT for generating password 
// var criteria = prompt("Please enter  ")





// function generatePassword() {
//   var criteria = 
// }












// Defining the characters 






// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

