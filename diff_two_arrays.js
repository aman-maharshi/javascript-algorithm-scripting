/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

*/

function diffArray(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++) {
  	if(arr2.indexOf(arr1[i]) === -1) {
  		newArr.push(arr1[i]);
  	}
  		
  }
  for(var j = 0; j < arr2.length; j++) {
  	if (arr1.indexOf(arr2[j]) === -1) {
  		newArr.push(arr2[j]);
  	}
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//[4]

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
//["piglet", 4]