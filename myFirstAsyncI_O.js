//require fs module
var fs = require('fs');
//set variable for the file path
var path = "" + process.argv.slice(2);
//read file data and log out number of lines in file
var fileContents = fs.readFile(path, function(error, data){
    var arr = data.toString().split("\n");
    console.log(arr.length - 1);
});