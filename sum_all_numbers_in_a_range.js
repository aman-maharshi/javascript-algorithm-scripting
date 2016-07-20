/*

input: array of two numbers
output: return the sum of those two numbers and all numbers between them

*/

function sumAll(arr) {
	first = arr[0];
	last = arr.slice(-1)[0];
	var result = 0;
	if (first < last){ 
		for(var i = first; i <= last; i++) {
			result = result + i;
		}
	}
	else if (first > last){
		for(var j = last; j <= first; j++) {
			result = result + j;
		}
	}
	
	return result;
}


sumAll([1, 4]);
//10
sumAll([10, 5]);
//45