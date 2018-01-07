// Problem:
// Use the function factorialNumber(number) as recursive function to complete the exercise and return the result.

// Solution:
function factorialNumber(number) {
    if (number === 0) {
        return 1
    } else {
        return number * factorialNumber(number - 1)
    }
}
