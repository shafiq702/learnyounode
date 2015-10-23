//require fs module
var fs = require("fs");
//set variable for the file path
var filePath = "" + process.argv.slice(2);
//read file and store in contents variable
var contents = fs.readFileSync(filePath);
var arr = contents.toString().split("\n");
console.log(arr.length - 1);