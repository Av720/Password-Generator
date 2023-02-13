
//  CREATING THE ARRAYS 

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // lowerCase
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // Uppercase
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];//Stricly numbers
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"]; //All characters


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  newGen = generateNewPassword();
  if (!newGen) return // Won't do anything if newGen is not valid
  document.getElementById("password").placeholder = newGen;
});


function generateNewPassword() {
  var choices = [];



  var enter = parseInt(
    prompt('Enter the length of characters you would like for your new password *Number between 8 - 128*')
  );
  console.log(`Characters: ${enter}`)

  if (enter < 8 || enter > 128 || !enter) {
    alert(`Please try again!`)
    return false
  }

  var addNumbers = confirm("Include numbers in your password? *YES for ok and Cancel for NO*")
  var addUpperCase = confirm("Include upper case letters? *YES for ok and Cancel for NO*");
  var addLowerCase = confirm("Include lower case letters? *YES for ok and Cancel for NO*");
  var addCharacters = confirm("include characters in your password");

  console.log(addNumbers, addCharacters, addUpperCase, addLowerCase)

  if (addNumbers) {
    choices.push(numbers)
  }

  if (addCharacters) {
    choices.push(characters)
  }

  if (addUpperCase) {
    choices.push(upper)
  }

  if (addLowerCase) {
    choices.push(lower)
  }


  console.log(choices)

  var newPassword = ""

  for (var i = 0; i < choices.length; i++) {
    var randomLetter = choices[i][Math.floor(Math.random() * choices[i].length)];
    console.log(randomLetter)
    newPassword += randomLetter
  }

  for (var i = choices.length; i < enter; i++) {
    var randomArray = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomArray)
    var randomLetter = randomArray[Math.floor(Math.random() * randomArray.length)];
    // console.log(randomLetter)


    console.log(randomLetter)
    newPassword += randomLetter
    // newPassword.push();
  }


  return newPassword


}