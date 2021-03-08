// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = window.prompt("How long would you like your password to be? (Minimum of 8 characters and maximum of 128)")
  console.log (length)

  var lower = window.confirm("Would you like any lowercase letters to be in your password?")
  console.log (lower)

  var upper = window.confirm("Would you like any uppercase letters to be in your password?")
  console.log (upper)

  var numbers = window.confirm("Would you like any numbers to be in your password?")
  console.log (numbers)

  var symbols = window.confirm("Would you like any symbols to be in your password?")
  console.log (symbols)

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);