/**
 * This function will allow the user to provide a parameter with as many words as possible
 * @param {string} inputString
 * @returns {string} user input
 */
function userInputString(inputString) {
  inputString = process.argv.slice(3).join("+");
  return inputString;
}

module.exports = { userInputString };
