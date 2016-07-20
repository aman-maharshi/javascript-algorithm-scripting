/*

Take each character, get its pair, and return the results as a 2d array.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

*/

function pairElement(str) {
	result = []
	// define pairing
	var mapping = {
		'A': 'T',
		'T': 'A',
		'C': 'G',
		'G': 'C'
	};

	//convering input to array
	str = str.split('');

	//looping through the array
	for (var i = 0; i < str.length; i++) {
		var pair = new Array(str[i], mapping[str[i]]);
		result.push(pair);

	}
	return result;
}

pairElement("ATCGA")
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]

pairElement("CTCTA")
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
