// Problem:
// Returns true if the string is a Palindrome(sequence of characters which reads the same backward or forward) and false if isn't.

// Teste:
describe("palindrome verification function", function() {
    
  it("it should check a mexican-fare feline", function() {
    expect(palindromeVerification("¡Taco cat!")).toBeTruthy();
  });

  it("it should check a fart-fueled wind instrument", function() {
    expect(palindromeVerification("A butt tuba")).toBeTruthy();
  });

});

// Solution:
function palindromeVerification(string) {
  var changed = string.toLowerCase().replace(/[\W_]/g, '');
  return changed.split('').reverse().join('') === changed;
}
