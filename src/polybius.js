// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }
  // Create polybius function with the input string and boolean encode perameter set to true as default
  function polybius(input, encode = true) {
    // Convert the input string to lowercase
    input = input.toLowerCase();

  // Initialize the splitString and key variables based encoding/decoding
    let splitString;
    let key = encodeKey;
    // Split the input string into an array of individual characters if we are encoding
    if(encode) {
      splitString = input.split("");
    } else {
      // Use the decoding key and split the input string into an array of individual words
      key = decodeKey;
      splitString = input.split(" ");
      // Check if the number of words is odd, which would be invalid input for decoding
      const isOdd = splitString.reduce((acc, array) => acc + array.length, 0) % 2;
      if(isOdd) {
        return false;
      }
      // Split each word into an array of individual characters, then group them into pairs
      splitString = splitString.map(section => section.split("").reduce((acc, char, index, collect) => {
          if(char === " ") {
            acc.push(" ");
          } else if(!(index % 2)) {
            acc.push(char + collect[index + 1]);
          }
          return acc;
        }, [])
      )
      // Flatten the array of arrays of pairs into a single array, separated by spaces
      .reduce((a, b) => a.concat(" ", b));
    }
    // Map each character in the splitString array to its corresponding value in the key object, or to a space if it is not found
    return splitString.map(char => key[char] || " ").join("");
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
