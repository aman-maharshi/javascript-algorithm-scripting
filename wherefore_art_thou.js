/*

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

*/



// works only when the second argument of the function that is the object contains not more than 2 elements
function whatIsInAName(array, object) {
  var result = [];
  var key_array = Object.keys(object);
  first_key = key_array[0];
  second_key = key_array[1];
  //console.log(first_key)
  
  for(var i = 0; i < array.length; i++) {
  	if(array[i][first_key] === object[first_key] && array[i][second_key] === object[second_key]) {
  		result.push(array[i]);
  	}
  }
  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [{ first: "Tybalt", last: "Capulet" }]


whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
//[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]