// Problema:
/*
    Tendo um array de objetos representando livros, 
    contendo informações como título, autor, ano 
    de publicação e número de páginas. Queremos 
    criar um novo array contendo apenas os títulos 
    dos livros cujo ano de publicação é anterior a 
    2000.
*/

// Solução:
const books = [
  {
    title: "A Menina que Roubava Livros",
    author: "Markus Zusak",
    year: 2005,
    pages: 480,
  },
  { title: "O Código da Vinci", author: "Dan Brown", year: 2003, pages: 460 },
  {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    year: 1997,
    pages: 223,
  },
  { title: "O Hobbit", author: "J.R.R. Tolkien", year: 1937, pages: 310 },
  { title: "O Nome da Rosa", author: "Umberto Eco", year: 1980, pages: 504 },
];

const titles = books
  .filter((book) => book.year < 2000)
  .map((book) => book.title);

console.log(titles);

// Resultado:
// ["Harry Potter e a Pedra Filosofal", "O Hobbit", "O Nome da Rosa"]
