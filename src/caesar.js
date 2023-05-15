// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
  // Create a string of lowercase letters to use for shifting
  const letters = "abcdefghijklmnopqrstuvwxyz";

  // Define the caesar function with three parameters: input, shift, and encode. Make true default 
  function caesar(input, shift, encode = true) {
    // If shift is invalid, return false
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
      return false;
    }

    // Create an empty string to hold the result
    let result = "";

    // If encode is false, invert the shift direction
    if (encode === false) {
      shift = shift * -1;
    }

    // Loop through each character in the input string
    for (let i = 0; i < input.length; i++) {
      // Convert the character to lowercase
      const letter = input[i].toLowerCase();

      // If the character is a letter, shift it
      if (letters.includes(letter)) {
        // Get the index of the letter in the letters string
        const letterInd = letters.indexOf(letter);

        // Add the shift to the letter index to get the shifted index
        let shiftedInd = letterInd + shift;

        // If the shifted index is greater than 25, wrap around to the beginning of the letters string
        if (shiftedInd > 25) {
          shiftedInd += -26;
        }

        // If the shifted index is less than 0 and greater than -25, wrap around to the end of the letters string
        if (shiftedInd < 0 && shiftedInd > -25) {
          shiftedInd += 26;
        }

        // Get the shifted letter from the letters string using the shifted index
        const shiftedChar = letters[shiftedInd];

        // Add the shifted letter to the result string
        result += shiftedChar;
      }
      // If the character is not a letter, add it to the result string as is
      else {
        result += letter;
      }
    }

    // Return the result string
    return result;
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
