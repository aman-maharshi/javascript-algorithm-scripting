/*

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

Example: fearNotLetter("abcdefghjklmno") should return "i"

*/

function fearNotLetter(str) {

  var startAscii = str.charCodeAt(0);
  for(var i = 0; i < str.length - 1; i++) {

  	//if (ascii of ith char !== ascii of i+1th char -1)
  	if(str.charCodeAt(i) !== (str.charCodeAt(i+1) - 1) ) {
  		//return String.fromCharCode(startAscii + i)
  		var temp = String.fromCharCode(startAscii + i + 1)
  		return temp;
  	}

  }
  return undefined
}

fearNotLetter("abce");
// "d"
