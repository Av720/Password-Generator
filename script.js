// Characters
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // lowerCase
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // Uppercase
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Stricly numbers

characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"]; // All characters


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  newGen = generateNewPassword();
  if (!newGen) return // Won't do anything if newGen is not valid
  document.getElementById("password").placeholder = newGen;
});


function generateNewPassword() {
  // Which criteria to use
  var choices = [];

  var enter = parseInt(
    prompt('Enter the length of characters you would like for your new password *Number between 8 - 128*')
  );
  // console.log(`Characters: ${enter}`) // Logs amount of Characters

  // if amount of charcters needed doesn't match minimum, will give handled error
  if (enter < 8 || enter > 128 || !enter) {
    alert(`Please try again!`)
    return false
  }

  // Booleans to see which criteria is needed
  const addNumbers = confirm("Include numbers in your password? *YES for ok and Cancel for NO*")
  const addUpperCase = confirm("Include upper case letters? *YES for ok and Cancel for NO*");
  const addLowerCase = confirm("Include lower case letters? *YES for ok and Cancel for NO*");
  const addCharacters = confirm("Include characters? *YES for ok and Cancel for NO*");

  console.log(addNumbers, addCharacters, addUpperCase, addLowerCase) // Logs for what is needed

  if (!addNumbers && !addCharacters && !addUpperCase && !addLowerCase) {
    alert('Password criteria must contain either Uppercase Letters, Lowercase Letters, Numbers, or Characters')
    return false // Will give handled error if said no to everything
  }

  if (addNumbers) {
    choices.push(numbers) // if password needs numbers, it will add the array for it
  }

  if (addCharacters) {
    choices.push(characters) // if the password needs characters, it will add the array for it
  }

  if (addUpperCase) {
    choices.push(upper) // if the password needs uppercase letters, it will add the array for it
  }

  if (addLowerCase) {
    choices.push(lower) // if the password need lowercase letters, it will add the array for it
  }


  // console.log(choices) // logs it

  var newPassword = "" // Empty password string

  for (var i = 0; i < choices.length; i++) { // This will guarentee the criteria for the password is met
    var randomLetter = choices[i][Math.floor(Math.random() * choices[i].length)];
    // console.log(randomLetter)
    newPassword += randomLetter // this will add the random letter to the password generated
  }

  for (var i = choices.length; i < enter; i++) { // This will randomize every character other than the first 1-4 depending on the criteria. E.X. if the criteria only needs Uppercase and Lowercase. the first two will be either Uppercase or Lowercase (guarenteed) and the remaining characters will be completly randomized
    var randomArray = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomArray)
    var randomLetter = randomArray[Math.floor(Math.random() * randomArray.length)];

    // console.log(randomLetter)
    newPassword += randomLetter // this will add the random letter to the password generated
  }


  return newPassword // returns the password generated


}