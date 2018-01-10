// Problem:
// Use the function factorialNumber(number) as recursive function to complete the exercise and return the result.

// Test:
describe("factorial number function", function() {
    
  it("if the argument equal to 1 should return 1", function() {
    expect(factorialNumber(1)).toEqual(1);
  });
 
  it("if the argument equal to 5 should return 120", function() {
    expect(factorialNumber(5)).toEqual(120);
  });

});

// Solution:
function factorialNumber(number) {
    if (number === 0) {
        return 1
    } else {
        return number * factorialNumber(number - 1)
    }
}
