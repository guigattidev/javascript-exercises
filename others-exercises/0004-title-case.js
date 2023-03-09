// Problem:
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Test:
describe("title case function", function() {
    
    it("it should to upper case the first letter", function() {
      expect(titleCase("hello world!")).toBe("Hello World!");
    });
  
});
  
// Solution:
function titleCase(string) {
    var result = string.toLowerCase().split(" ").map(function(value) {
        return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
    });
    return result.join(" ");
}
