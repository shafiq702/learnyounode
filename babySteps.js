//create array starting from the third command line agrument
var numbersArray = process.argv.slice(2);
// sum from numbersArray
var sum = 0;
//Iterate through numbersArray
for(var i = 0; i < numbersArray.length; i++){
    sum+=parseInt(numbersArray[i])
}
console.log(sum);   