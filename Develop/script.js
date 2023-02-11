//  VARIABLES

var lowerCase = "abcdefghijklmnopqrstuvwxyz" // lowerCase 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase 
var numbers = "1234567890"; //Stricly numbers 
var characters = "!@#$%^&*()_+'"; //All characters 
var randomSelection;
var length;






















//BUTTON PRESS TO GENERATE A PASSWORD 
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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

