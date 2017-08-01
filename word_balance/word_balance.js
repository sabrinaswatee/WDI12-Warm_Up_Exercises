/*
Word Balance
We're going to balance words on one of the letters in them.
We'll use the position and letter itself to calculate the weight around the balance point.
A word can be balanced if the weight on either side of the balance point is equal.
Not all words can be balanced, but those that can are interesting for this challenge.

The formula to calculate the weight of the word is to look at the letter position in
the English alphabet (so A=1, B=2, C=3 ... Z=26) as the letter weight,
then multiply that by the distance from the balance point,
so the first letter away is multiplied by 1, the second away by 2, etc.

As an example:
STEAD balances at T: 1 * S(19) = 1 * E(5) + 2 * A(1) + 3 * D(4))
Input Description - You'll be given a series of English words.
Example: STEAD
Output Description - Your program or function should emit the words split by their balance point and the weight on either side of the balance point.
Example: S T EAD - 19
This indicates that the T is the balance point and that the weight on either side is 19.

Try these words...
CONSUBSTANTIATION
WRONGHEADED
UNINTELLIGIBILITY
SUPERGLUE
Challenge Output```
#### Output should be...
CONSUBST A NTIATION - 456 WRO N GHEADED - 120 UNINTELL I GIBILITY - 521 SUPERGLUE DOES NOT BALANCE```
*/

var word = process.argv[2].toUpperCase();
var letter_value = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var word_balance = function (word) {
  var word_array = word.split('');
  for (var i = 1; i < word_array.length; i++) {
    var pivot = word_array[i];

    var left_array = word_array.slice(0, i);
    var left_value = 0;
    for (var j = 0; j < left_array.length; j++) {
      left_value += (i - j) * (letter_value.indexOf(left_array[j])+1);
    }

    var right_array = word_array.slice(i+1, word_array.length+1);
    var right_value = 0;
    for (var k = 0; k < right_array.length; k++) {
      right_value += (k + 1) * (letter_value.indexOf(right_array[k])+1);
    }

    if (left_value == right_value) {
      console.log (left_array.join('') + ' ' + pivot + ' ' + right_array.join('') + '-' + left_value);
      break;
    }
    else if (i + 1 == word_array.length && left_value != right_value) {
      console.log (word + ' Does not balance');
    }
    else {
      continue;
    };
  };
};

word_balance(word);
