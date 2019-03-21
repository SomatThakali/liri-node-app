/**
 * This function will allow the user to provide a parameter with as many words as possible
 * @param {string} inputString
 * @returns {string} user input
 */
function userInputString(inputString) {
  inputString = "";
  for (var i = 3; i < process.argv.length; i++) {
    if (i == process.argv.length - 1) {
      inputString += process.argv[i];
    } else {
      inputString += process.argv[i] + "+";
    }
  }
  return inputString;
}

module.exports = { userInputString };
