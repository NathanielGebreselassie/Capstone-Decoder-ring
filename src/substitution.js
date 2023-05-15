// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const encryptionKeys = {};

    // return false if alphabet is missing, has duplicates, or is not 26 characters
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    // create encryption key object
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabetArray.forEach((letter, index) => {
      encryptionKeys[letter] = alphabet[index];
    });

    const buildEncryption = input.toLowerCase().split('');

    let result = "";

    buildEncryption.forEach((letter) => {
      if (letter === " ") {
        result += " ";
      } else {
        const isEncoded = encode;
        const encryptionKey = encryptionKeys[letter];
        const decryptedLetter = alphabetArray.find((key) => encryptionKeys[key] === letter);

        // if encode is true, use encryption key, otherwise use decrypted letter
        result += isEncoded ? encryptionKey : decryptedLetter;
      }
    });

    return result;
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
