const validator = require('validator');
const notes = require('./notes');

console.log(notes());

console.log(validator.isEmail("gmail.com"));
console.log(validator.isURL("https/www.gmail.com"));