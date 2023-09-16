
// Import Book and Library
// module.exports = {Book}
const {Book} = require("./Book");
// module.exports = Library
const Library = require("./Library");


// make a library
let newLibrary = new Library();

// make some books 
let coolProgrammingBook = new Book("Cool JS Things 2023 Edition");
let coolPokemonBook = new Book("How To Catch Them All 2023 Edition");

// put books in library 
newLibrary.books.push(coolProgrammingBook, coolPokemonBook);

console.log(newLibrary.books);

let {Media} = require("./Media");
console.log(Media.count);
