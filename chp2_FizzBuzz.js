// var fizzBuzz = function (num) {
// 	for (var i = 1; i <= num; i++) {
// 		if (i % 15 === 0) { // if/else if statement must yield "true" to execute program, can capture boolean value by saving to a var
// 			console.log("FizzBuzz");
// 		}
// 		else if (i % 3 === 0){
// 			console.log("Fizz");
// 		}
// 		else if (i % 5 === 0){
// 			console.log("Buzz");
// 		}
// 		else {
// 			console.log(i)
// 		}
// 	}
// 	return num;
// }
// fizzBuzz(20);

function fizzBuzz (num) {
	let result = " ";
	for (let i = 1; i <= num; i++) {
		if(i % 3 === 0) {
			result += "Fizz";
		}
		if(i % 5 === 0) {
			result += "Buzz";
		}
	}
	console.log(result || i);
}
