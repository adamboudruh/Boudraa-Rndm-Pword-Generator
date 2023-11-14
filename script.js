/*  */// Assignment Code
var generateBtn = document.querySelector("#generate");

writePassword();

function generatePassword() {
  var pLength = prompt("How long would you like the password to be? Please enter a number between 8 and 128: ");
  console.log("Length selected: " + pLength);
  var inclLower = confirm("Would you like to include lowercase characters?");
  console.log("Will password nclude lower? " + inclLower);
  var inclUpper = confirm("Would you like to include uppercase characters?");
  console.log("Will password nclude upper? " + inclUpper);
  var inclNum = confirm("Would you like to include numeric characters?");
  console.log("Will password nclude nums? " + inclNum);
  var inclSpec = confirm("Would you like to include special characters?");
  console.log("Will password nclude special chars? " + inclSpec);
  if (!inclLower && !inclUpper && !inclNum && !inclSpec) alert("ERROR: Please pick at least one character type!");
  else {
    return "blah blah blah";
  }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);