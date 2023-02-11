//  VARIABLES

var lowerCase = "abcdefghijklmnopqrstuvwxyz"; // lowerCase
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

function generateNewPassword() {
  // Prompt for the new password when clicked
  length = prompt(
    "Enter the lenght of characters you would like for your new password *Number between 8 - 128*"
  );
  // if there was a user error, "try again for a second time"
  if (!length) {
    alert("Please try again! ");

    //setting the less and or more than for the charaters asked
  } else if (length < 8 || length > 128) {
    length = prompt("New password must contain a number from 8 - 128");
  } else {
    numbers = confirm("Incude numbers in your password");
    upperCase = confirm("Include the amount of upper case letters");
    lowerCase = confirm("Iclude the amount of lower case letters");
    characters = confirm("include the amount of characters in your password");
  }
}




generateBtn.addEventListener("click", generateNewPassword);
