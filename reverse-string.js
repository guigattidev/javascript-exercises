// Problem:
// Reverse the string "Hello World!" for "!dlroW olleH" in the simplest possible way.

// Test:
describe("reverse string function", function() {
    
  it("it should to reserve the string", function() {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  });

});

// Solution:
function reverseString(string) {
  return string.split("").reverse().join("");
}
