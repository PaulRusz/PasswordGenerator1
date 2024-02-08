// Assignment code here
//passwordOptions has all the necessary data required to generate the password requested

function generatePassword() {
  var password = ""
  var chosenCharacters = ""
  var userPasswordLength = prompt("Choose a length for your password between 8 and 128 characters");
  var confirmUpper = confirm("Do you want any uppercase letters?")
  var confirmLower = confirm("Do you want any lowercase letters?")
  var confirmNumbers= confirm("Do you want any numbers?")
  var confirmSpecial = confirm("Do you want any special characters?")
  if (confirmUpper === true) {
    chosenCharacters = chosenCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (confirmLower === true) {
    chosenCharacters = chosenCharacters + "abcdefghijklmnopqrstuvwxyz"
  }
  if (confirmNumbers === true) {
    chosenCharacters = chosenCharacters + "0123456789"
  }
  if (confirmSpecial === true) {
    chosenCharacters = chosenCharacters + "!@#$%^&*()"
  }


  if (userPasswordLength < 8 || userPasswordLength > 128) {
    alert ("Invalid password length.  Please choose a password length between 8 and 128.")
    var userPasswordLength = prompt("Choose a length for your password between 8 and 128 characters")
  } 

  if (confirmUpper === false && confirmLower === false 
  && confirmNumbers === false && confirmSpecial === false) {
    window.alert("Please choose a character type for your password");
  }
  

  for (let i = 0; i < userPasswordLength; i++) {
    password = password + chosenCharacters.charAt(Math.floor(Math.random()* chosenCharacters.length))
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


