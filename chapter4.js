

/*Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

// var range = function(start, end) {
// 	var rangeArray = [];
// 	for(var i = start; i <= end; i++){
// 		rangeArray.push(i);
// 	}
// 	return rangeArray;
// };

var sum = function(array){
	return array.reduce(function(sum, currentNum){
		return sum += currentNum;
	})
};

var range = function(start, end, step) {
	var rangeArray = [];
	if(step !== undefined) {
		for(var i = start; i <= end; i+= step){
		rangeArray.push(i);
		}
	} else {
		for(var i = start; i <= end; i++){
		rangeArray.push(i);
		}
	}
	return rangeArray;
};

console.log(range(5,2,-1))

/***REVERSING AN ARRAY***/

/*Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?*/

var reverseArray = function (array) {
	return array.reduce(function(reversedArray, value) {
		reversedArray.unshift(value);
		return reversedArray;
	});
}

var reverseArrayInPlace = function(array) {
	array.forEach(function(value, index, array){
		var swap = value;
		array[index] = array[array.length-1];
		array[array.length-1] = swap;
	});
	return array;

}

