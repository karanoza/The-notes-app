const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

// customize the yargs version

yargs.version("1.1.0");

// console.log(process.argv);
// console.log(yargs.argv);

// create add command

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create Remove command

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create List command

yargs.command({
  command: "list",
  describe: "List your note",
  handler: function () {
    console.log("Listout the note");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read your note",
  handler: function () {
    console.log("reading the note");
  },
});
console.log(yargs.argv);

// if (command === "add") {
// } else if (command === "remove") {
// }

// below code is for Chalk and validator reference
// const msg = getNotes();

// console.log(msg);

// console.log(validator.isEmail("karan@example.com"));
// console.log(validator.isURL("www.ngkaran.com"));

// const greenMsg = chalk.bold.red("Success!");
// console.log(greenMsg);

// const fs = require("fs");

// fs.writeFileSync("note.txt", "MY name is karan oza");

// fs.appendFileSync("note.txt", " Bunty boyssss");
