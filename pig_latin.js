/*

Takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

*/

function translatePigLatin(str) {

  str_array = str.split('');

  // if first letter is a vowel
  if(isVowel(str_array[0])){
  	// add 'way' as suffix
  	str = str + 'way';
  	return str;
  }
  //if first letter is consonant
  else if(!isVowel(str_array[0])){
  	var location;
  	//find the first occurrence of a vowel after that
  	for(var j = 1; j < str.length; j++) {
  		if(isVowel(str_array[j])) {
  			location = j;
  			break;
  		}
  	}

  	// slice the consonant part and move it to the end
  	var prefix = str.substr(0, j);
  	str = str.substr(j, str.length);
  	str = str + prefix;

  	// add 'ay' as suffix
  	str = str + 'ay';
  }
  return str;
}

function isVowel(char) {
	arr = ['a', 'e', 'i', 'o', 'u'];
	for (var i = 0; i < arr.length; i++) {
		if (char === arr[i]) {
			return true;
		}
	}
	return false
}

translatePigLatin("glove");
// oveglay
translatePigLatin("algorithm");
//algorithmway
