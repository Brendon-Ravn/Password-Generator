// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var specAlpha = '!@#$%&*?';
var numAlpha = '0123456789';


function writePassword() {
  var passwordText = document.querySelector("#password");

  

  function generatePassword() {
    var values = '';
    var newPassword = '';
    var numberCharacters = parseInt(prompt('How many characters? Must be between 8-128!'));
    var upperCase = confirm('Use uppercase letters?');
    var lowerCase = confirm('Use lowercase letters?');
    var specCase = confirm('Use special characters?');
    var numCase = confirm('Use numbers?')
    
    if (upperCase) {
      values = values.concat(upperAlpha);
    }
  
    if (lowerCase) {
      values = values.concat(lowerAlpha);
    }
  
    if (specCase) {
      values = values.concat(specAlpha);
    }

    if (numCase) {
      values = values.concat(numAlpha);
    }



  
    var possibleCharactersLength = values.length;
  
    for (var i = 0; i < numberCharacters; i++) {
      var rndmNumber = Math.floor(Math.random() * possibleCharactersLength);
      var rndmValue = values.charAt(rndmNumber);
      newPassword = newPassword.concat(rndmValue);
    }
    passwordText.replaceWith(newPassword);
  }
  
  generatePassword();

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
