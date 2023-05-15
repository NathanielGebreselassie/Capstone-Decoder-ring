// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the decoded message based on shift value", () => {
        const actual = caesarModule.caesar("xjhwjy rjxxflj!", 5, false);
    const expected = "secret message!"; 
        expect(actual).to.eql(expected);
  });
  it("should return the encoded message based on shift value", () => {
        const actual = caesarModule.caesar("Secret message!", 5);
    const expected = "xjhwjy rjxxflj!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces as is", () => {
        const actual = caesarModule.caesar("hello !", 8);
        const expected = " "
        expect(actual.charAt(5)).to.equal(expected);
    });
    it("should leave special characters as is", () => {
        const actual = caesarModule.caesar("hello !", 8);
        const expected = "!"
        expect(actual.charAt(6)).to.equal(expected);
    });
    it("should wrap characters after letter 'z'", () => {
        const actual = caesarModule.caesar("xray", 4);
      const expected = "bvec";
        expect(actual).to.equal(expected);
    });
  it("should ignore capital letters", () => {
    const actual = caesarModule.caesar("Hello", 2);
    const expected = "jgnnq";
    expect(actual).to.eql(expected);
  });
  it("should return false for no shift parameter", () => {
    const actual = caesarModule.caesar("Nathaniel");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("jsk sjjs", 99);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("ksdk skj", -99);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("sa asuaiuks", 0);
        expect(actual).to.be.false; 
    });
  });
});

