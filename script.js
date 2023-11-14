/*  */// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pLength = prompt("How long would you like the password to be? Please enter a number between 8 and 128: ");
    if (pLength < 8 || pLength > 128) { //ensures that a valid length is used
      alert("Please enter a length between 8 and 128!");
      return "Try again ¯\\_(ツ)_/¯";
    }
  console.log("Length selected: " + pLength);
  var inclLower = confirm("Would you like to include lowercase characters?");
  console.log("Will password include lower? " + inclLower);
  var inclUpper = confirm("Would you like to include uppercase characters?");
  console.log("Will password include upper? " + inclUpper);
  var inclNum = confirm("Would you like to include numeric characters?");
  console.log("Will password include nums? " + inclNum);
  var inclSpec = confirm("Would you like to include special characters?");
  console.log("Will password include special chars? " + inclSpec); //these booleans are used to determine what characters are added to the pool
  var strLow = "abcdefghijklmnopqrstuvwxyz";
  var strUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strNum = "1234567890";
  var strSpec = "!@#$%&*()+-?.";
  var strFinal = ""; //this is the pool that characters are pulled from the create the password
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
      for (var i = 0; i < pLength; i++) { //this loop pulls and appends a random character as many times as is dictated by the pLength
        pWord += strFinal.charAt(Math.floor(Math.random() * (strFinal.length)))
      } //Math.floor rounds the number down to ensure it's an integer
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