// Problema:
/*
    Em um array de números e queremos criar um novo array 
    contendo o quadrado de cada número.
*/

// Solução:
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((num) => num ** 2);

console.log(squares);

// Resultado:
// [1, 4, 9, 16, 25]
