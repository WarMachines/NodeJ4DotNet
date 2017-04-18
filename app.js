console.log('Hello World');

var x = 10;
var y = 25;

console.log(x * y);


var msgs=require("./msg.js");
var msg=new msgs();
console.log(msg.first);


// required does not need file extension it will look for file or folder with the name and which ever finds first will get that other wise fail if not able to find either
// in case if no file found it will for folder and pick up index.js file, that why file should be index.js not any other
var logger=require("./logger");   
logger.log("This is from logger");

var underscore=require("underscore");


// case 3 calling
// var msg=new msgs();
// console.log(msg.first);

// case 2 calling
//console.log(msg());


// This way of calling goes with case 1
// console.log(msg.first);
// console.log(msg.second);
// console.log(msg.third);
// console.log(msg.third.name);