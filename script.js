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

// PSEUDOCODE
// I want to make arrays with all characters
// as the user decides what they want
// combine the arrays into a temp local variable
// generate a random number the characters desired amt of times
// add those to another array maybe or a string
// if theyre stored in an array, turn the array to a string
// print the generated string in the right place

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];

var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

function generatePassword(){
  var chosen = [];
  var pw = [];
  var totalChar = 0;
  function getTotal(){
    var tempTotal = 0;
    tempTotal = parseInt(prompt("Choose a length for your password of at least 8 and no more than 128."));
    if (isNaN(tempTotal)){
      alert("That's not a number!");
      return 0;
    }
    if (tempTotal<8){
      alert("That's too low!");
      return 0;
    }
    else if (tempTotal>128){
      alert("That's too high!");
      return 0;
    }
    else{
      return tempTotal;
    }
  }

  totalChar = getTotal();
  console.log(totalChar);

  if(totalChar===0){
  return "Improper length entered: try again.";
  }
  else{
    if(confirm("Would you like lowercase letters?")){
     chosen = chosen.concat(lowercase);
    }
   if(confirm("Would you like uppercase letters?")){
     chosen = chosen.concat(uppercase);
    }
   if(confirm("Would you like numbers?")){
     chosen = chosen.concat(numbers);
    }
   if(confirm("Would you like special characters?")){
      chosen = chosen.concat(special);
    }
   if(chosen.length === 0){
    return "Please pick at least one type of character!"
    }

    for (var i = 0; i <= totalChar; i++) { 
     pw.push(chosen[Math.floor(Math.random() * chosen.length)])
    }
  
  console.log(pw.join(""));

  return pw.join("");
  }
}