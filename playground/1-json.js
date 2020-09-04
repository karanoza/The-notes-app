const fs = require("fs");

// const book = {
//   title: "Unlimited mistakes of my life",
//   author: "Karan Oza",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffer2 = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer2.toString();
const user = JSON.parse(dataJSON);

user.name = "Bunty";
user.age = 20;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
