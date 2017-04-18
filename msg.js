module.exports = function(){
	this.first= "This is first message as pseudo class";      // This will act as constructor when we create a object of this function or pseudo class
}



// Note: (Case 2) This is where are assigning export a functtion this will never be cached as function is executable body which will excute every time
// module.exports = function(){
// 	return "This is first message as function";
// }


// Note : (case 1)  This way of exporting is cached after the first call/export
//module.exports.first="This is first msg";
//module.exports.second="This is second msg";
//module.exports.third={name:"message"};