//  VARIABLES

var lowerCase = "abcdefghijklmnopqrstuvwxyz"; // lowerCase
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase
var numbers = "1234567890"; //Stricly numbers
var characters = "!@#$%^&*()_+'"; //All characters
var randomSelection;
var length;


// Setting the array for the variables 
mixedPassword = [lowerCase, upperCase, numbers, characters];
console.log(mixedPassword);

// target id (generate) element // DOM 
var generateBtn = document.querySelector("#generate");

//tie the password variable to the id #password
function newPassword() {
  var password = generateNewPassword();
  var passwordCharacters = document.querySelector("#password");
  passwordCharacters.value = password;
}

//Password parameters

function generateNewPassword() {
  // Prompt for the new password when clicked
  length = prompt(
    "Enter the length of characters you would like for your new password *Number between 8 - 128*" // beginning of prompt
  );
  // if there was a user error, "try again for a second time"
  if (!length) { // the ! will invert a boolean . if cancel is pressed, then the alert (Please try again) will pop up and code will not run 
    alert("Please try again! "); // code will not run if pressed cancel 

    //if everything else above is true then the bottom will alert
  } else if (length < 8 || length > 128) {
    length = prompt("New password must contain a number from 8 - 128"); // Beginning  of prompt
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

  // If all choices are true in console log > then this if else will generate 
  if (numbers && characters && upperCase && lowerCase) {
    randomSelection = mixedPassword.concat(numbers, characters, upperCase, lowerCase);

    // if only 3/4 options are picked 
  } else if (numbers && upperCase && lowerCase) {
    randomSelection = mixedPassword.concat(numbers, upperCase, lowerCase);      // numbers, uppercase and lowercase are picked 
  } else if (upperCase && lowerCase && characters) {
    randomSelection = mixedPassword.concat(upperCase, lowerCase, characters);  // uppercase, lowercase and characters are picked 
  } else if (lowerCase && upperCase && numbers) {
    randomSelection = mixedPassword.concat(lowerCase, upperCase, numbers);     // lowercase, uppercase and numbers are picked 
  } else if (characters && upperCase && numbers) {
    randomSelection = mixedPassword.concat(characters, upperCase, numbers);    // characters,  uppercase and numbers are picked 
  } else {
    randomSelection = mixedPassword.concat();

  }

  alert(randomSelection);
}

generateBtn.addEventListener("click", newPassword);
