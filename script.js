/*  */// Assignment Code
var generateBtn = document.querySelector("#generate");

// don't know how to do an event listener yet so I'm just calling the function here
writePassword();

function generatePassword() {
  var pLength = prompt("How long would you like the password to be? Please enter a number between 8 and 128: ");
    if (pLength < 8 || pLength > 128) {
      alert("Please enter a length between 8 and 128!");
      return "Try again ¯\\_(ツ)_/¯";
    }
  console.log("Length selected: " + pLength);
  var inclLower = confirm("Would you like to include lowercase characters?");
  console.log("Will password nclude lower? " + inclLower);
  var inclUpper = confirm("Would you like to include uppercase characters?");
  console.log("Will password nclude upper? " + inclUpper);
  var inclNum = confirm("Would you like to include numeric characters?");
  console.log("Will password nclude nums? " + inclNum);
  var inclSpec = confirm("Would you like to include special characters?");
  console.log("Will password nclude special chars? " + inclSpec);
  var strLow = "abcdefghijklmnopqrstuvwxyz";
  var strUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strNum = "1234567890";
  var strSpec = "!@#$%&*()+-?.";
  var strFinal = "";
    if (inclLower) strFinal += strLow;
    if (inclUpper) strFinal += strUp;
    if (inclNum) strFinal += strNum;
    if (inclSpec) strFinal += strSpec;
    var pWord = "";
    var char;
    if (strFinal == "") {
      alert("Please choose one or more character types!");
      return "Try again ¯\\_(ツ)_/¯";
    }
    else {
      for (var i = 0; i <= pLength; i++) {
        pWord += strFinal.charAt(Math.floor(Math.random() * (strFinal.length + 1)))
      }
    }
    return pWord;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);