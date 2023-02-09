// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// pseudocode
// I want to make arrays with all characters
// as the user decides what they want
// combine the arrays into a temp local variable
// generate a random number the characters desired amt of times
// add those to another array maybe or a string
// if theyre stored in an array, turn the array to a string
// print the generated string in the right place


