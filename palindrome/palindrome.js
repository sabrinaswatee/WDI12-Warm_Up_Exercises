/*
Return true if the given string is a palindrome.
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both
forward and backward, ignoring punctuation, case, and spacing.
*/

var wordArray = [];

var palindromeSearch = function (word) {
  var lowerCase = word.toLowerCase().split("");
  for (var counter = 0; counter < lowerCase.length; counter++) {
    if (lowerCase[counter].match(/[a-z]/)) {
      wordArray.push (lowerCase[counter]);
    }
    else {
      continue;
    }
  }
  var wordString = wordArray.join("");
  var wordReversed = wordArray.reverse().join("");
  return wordString == wordReversed;
}

var word = prompt ('Is it a palindrome?');
var boolean = palindromeSearch (word);
console.log (boolean);

/* Solution
function palindrome(str) {
  var stripped = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
  var reversed = stripped.split("").reverse().join("");
  return reversed == stripped;
}
*/
