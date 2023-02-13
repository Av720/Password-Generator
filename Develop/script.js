// var outputBox = document.querySelector("#password");

//  VARIABLES

var addLowerCase;
var addUpperCase;
var addNumbers;
var addCharacters;


lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // lowerCase
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // Uppercase
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];//Stricly numbers

characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"]; //All characters

var randomSelection;
var length

// // Setting the array for the variables
// mixedPassword = [];


var choices;

// target id (generate) element // DOM
var generateBtn = document.querySelector("#generate");

//tie the password variable to the id #password
function newPassword() {
  var password = generateNewPassword();

}

//Password parameters

function generateNewPassword() {
  // Prompt for the new password when clicked
  enter = parseInt(
    prompt(
      "Enter the length of characters you would like for your new password *Number between 8 - 128*" // beginning of prompt
    ), 10);
  // if there was a user error, "try again for a second time"
  if (!enter) {
    // the ! will invert a boolean . if cancel is pressed, then the alert (Please try again) will pop up and code will not run
    alert("Please try again! "); // code will not run if pressed cancel

    //if everything else above is true then the bottom will alert
  } else if (enter < 8 || enter > 128) {
    enter = prompt("New password must contain a number from 8 - 128"); // Beginning  of prompt
  } else {
    numbers = confirm(
      "Include numbers in your password? *YES for ok and Cancel for NO* " // Numbers prompt
    );
    upperCase = confirm(
      "Include upper case letters? *YES for ok and Cancel for NO*" //upperCase prompt
    );
    lowerCase = confirm(
      "Include lower case letters? *YES for ok and Cancel for NO*" // lowerCase Prompt
    );
    characters = confirm("include characters in your password"); // characters prompt

    // Boolean view for dev
    // console.log(numbers, upperCase, lowerCase, characters);
  }

  // LOGIC
  console.log(length);
  // if all choices are negative then this will prompt
  // if (!numbers && !characters && !upperCase && !lowerCase) {
  //   alert("You have to choose a criteria in order to create a safe password");
}
// If all choices are true in console log > then this if else will generate
if (addNumbers && addCharacters && addUpperCase && addLowerCase) {
  choices = choices.concat(
    numbers,
    characters,
    upper,
    lower)


  // if only 3/4 options are picked
} else if (addNumbers && addUpperCase && addLowerCase) {
  choices = character.concat(numbers, upper, lower); // numbers, uppercase and lowercase are picked
} else if (addUpperCase && addLowerCase && addCharacters) {
  choices = character.concat(upper, lower, characters); // uppercase, lowercase and characters are picked
} else if (addLowerCase && addUpperCase && addNumbers) {
  choices = character.concat(lower, upper, numbers); // lowercase, uppercase and numbers are picked
} else if (addCharacters && addUpperCase && addNumbers) {
  choices = character.concat(characters, upper, numbers); // characters,  uppercase and numbers are picked

}
var output = [];



//Loop 

for (var i = 0; i < enter; i++) {
  var randIndex = Math.floor(Math.random() * randomSelection.length);

  output += [randomSelection[randIndex]];
}



console.log(randIndex)

console.log(output);
var passwordCharacters = document.querySelector("#password");
passwordCharacters.value = output;

console.log(randomSelection);

generateBtn.addEventListener("click", generateNewPassword);
