// Exercício:
/*
    Suponha que temos um array de objetos que representam 
    produtos em uma loja, com as seguintes propriedades: 
    id, name, description e price. Queremos criar um novo 
    array que contém apenas os nomes dos produtos, em caixa 
    alta.
*/

const products = [
  { id: 1, name: "Camiseta", description: "Camiseta de algodão", price: 29.99 },
  { id: 2, name: "Calça", description: "Calça jeans", price: 59.99 },
  { id: 3, name: "Tênis", description: "Tênis esportivo", price: 99.99 },
];

const productNamesUpperCase = products.map((product) =>
  product.name.toUpperCase()
);

console.log(productNamesUpperCase);

// Resultado:
// ["CAMISETA", "CALÇA", "TÊNIS"]
