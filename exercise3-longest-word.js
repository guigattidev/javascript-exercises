// Problem:
// Return the length of the longest word in the argument string.

// Test:
describe("longest word function", function() {
    
  it("it should check if is greater than 0", function() {
    expect(longestWord("Don't treat your puppy like a dog")).toBeGreaterThan(0);
  });

  it("if the string argument should return 5", function() {
    expect(longestWord("Don't treat your puppy like a dog")).toEqual(5);
  });

});

// Solution:
function longestWord(string) {
  return string.split(" ").sort(function(a, b) { return b.length - a.length; })[0].length;
}
