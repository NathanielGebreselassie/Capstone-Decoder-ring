// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should encode a message by translating letters to numbers", () => {
     const actual = polybiusModule.polybius("decode"); 
     const expected = "415131434151";
    expect(actual).to.eql(expected);
   });
  it("should decode a message by translating each numbers into a letter", () => {
    const actual = polybiusModule.polybius('415131434151', false);
    const expected = "decode";
        expect(actual).to.equal(expected);
  });
  it("spaces should be maintained when encoding", () => {
     const actual = polybiusModule.polybius("decoder ring"); 
     const expected = "41513143415124 24423322";
    expect(actual).to.eql(expected);
  });
  it("spaces should be maintained when decoding", () => {
     const actual = polybiusModule.polybius("41513143415124 3111533444433351", false); 
     const expected = "decoder capstone";
    expect(actual).to.eql(expected);
  });
it("should ignore capital letters", () => {
     const actual = polybiusModule.polybius("Hello World"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  
  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("4432423352125413", false); 
     const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("dijon"); 
     const expected = "4142424333";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string without spaces is not even", () => {
    const actual = polybiusModule.polybius("942840283", false);
    expect(actual).to.be.false;
  });
});
