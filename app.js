console.log('Hello World');

var x = 10;
var y = 25;

console.log(x * y);


var msgs=require("./msg.js");
var msg=new msgs();
console.log(msg.first);


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