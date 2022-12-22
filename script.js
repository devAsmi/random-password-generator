// Assignment Code
var generateBtn = document.querySelector("#generate");
var usableNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var capitalAlphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var smallcaseAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = [
  "~",
  "!",
  "@",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "]",
  "}",
];

// function to generate the password based on user input
function generatePassword() {
  var listOfDesiredCharacters = [];
  var numberOfCharacters = window.prompt(
    "Select the number of characters for Password."
  );

  if (numberOfCharacters < 8 || numberOfCharacters >= 128) {
    window.alert("Number of character must be between 8 and 128! ");
    return undefined;
  }

  var useNumbers = window.confirm("will you like any numeric characters?");
  if (useNumbers) {
    listOfDesiredCharacters = listOfDesiredCharacters.concat(usableNumbers);
  }

  var useSpecialCharacters = window.confirm(
    "will you like any special characters?"
  );
  if (useSpecialCharacters) {
    listOfDesiredCharacters = listOfDesiredCharacters.concat(specialCharacters);
  }

  var uselowerCase = window.confirm("will you like any lowercase character?");
  if (uselowerCase) {
    listOfDesiredCharacters =
      listOfDesiredCharacters.concat(smallcaseAlphabets);
  }

  var usecapital = window.confirm("will you like any uppercase characters?");
  if (usecapital) {
    listOfDesiredCharacters = listOfDesiredCharacters.concat(capitalAlphabets);
  }

  /**
   * Validate user choice that atleast one type is selected
   */
  if (listOfDesiredCharacters.length == 0) {
    window.alert(
      "You should choose atleast one criteria for the password, try again!"
    );
    return undefined;
  }

  /**
   * code to generate password
   * 1. For loop from 0 to numberOfCharactes
   * 2. Get a random number between 0 to length of listOfDesiredCharacters
   * 3. Get a new character from listOfDesiredCharacters at that index for the password each time
   * 3. The new character gets added to the password
   */
  var password = "";

  for (var i = 0; i < numberOfCharacters; i++) {
    var randomIndex = Math.floor(
      Math.random() * listOfDesiredCharacters.length
    );
    password = password.concat(listOfDesiredCharacters[randomIndex]);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // if password is undefined, it will reset the password textarea value
  if (password != undefined) {
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
