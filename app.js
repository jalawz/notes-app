const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');

console.log(notes());

console.log(validator.isEmail("gmail.com"));
console.log(validator.isURL("https/www.gmail.com"));
console.log(chalk.green.bold("Success!"));