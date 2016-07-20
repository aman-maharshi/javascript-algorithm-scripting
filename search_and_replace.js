/*

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

*/

function myReplace(sentence, to_replace, replace_with) {
	var initial_array = sentence.split(" ");
	
	if(to_replace[0] === to_replace[0].toUpperCase()) {
		replace_with = replace_with[0].toUpperCase()+replace_with.slice(1);
		console.log(replace_with);
	}
	
	for (var i = 0; i < initial_array.length; i++) {
		if(initial_array[i] === to_replace) {
			initial_array.splice(i, 1, replace_with);
		}
	}
	var result = initial_array.join(" ");
	return result;
	
}

myReplace("Let us go to the store", "store", "mall");
// "Let us go to the mall"

myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// "He is Sitting on the couch"