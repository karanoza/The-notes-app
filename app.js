const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail("karan@example.com"));
console.log(validator.isURL("www.ngkaran.com"));

const greenMsg = chalk.bold.green("Success!");
console.log(greenMsg);

// const fs = require("fs");

// fs.writeFileSync("note.txt", "MY name is karan oza");

// fs.appendFileSync("note.txt", " Bunty boyssss");
