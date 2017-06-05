// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.
// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
// The year will be a random year between 1930 and 1950.
// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."
// bonus: write an additional function 'grandpaTalk' that when called,
// will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

// sample output of grandpaTalk:
// // NO, NOT SINCE incorrect year // whats that sunny

var grannyTalk = function (question) {
  if (question == question.toUpperCase()) {
    if (question == "BYE?") {
      var grannyResponse = "What's that honey, I didn't hear you..";
    }
    else {
      var year = (Math.floor(Math.random() * 21)) + 1930;
      var grannyResponse = "NO, NOT SINCE " + year;
    }
  }
  else {
    var grannyResponse = "SPEAK UP SONNY JIM";
  }
  return grannyResponse;
}

var grandpaTalk = function (response) {
    if (response == "What's that honey, I didn't hear you..") {
      var grandpaResponse = "What's that sunny, I didn't hear you.."
    }
    else if (response == "SPEAK UP SONNY JIM") {
      var grandpaResponse = "SPEAK UP HONEY JIM";
    }
    else {
      var incorrectYear = (Math.floor(Math.random() * 21)) + 1950;
      var grandpaResponse = "NO, NOT SINCE " + incorrectYear;
      }
  return grandpaResponse;
}


do {
  var question = prompt ("Ask Granny");
} while (question.charAt(question.length - 1) != "?");
var response = grannyTalk (question);
console.log(response);

var grandpa = prompt ("Want to hear grandpas translation?");
if (grandpa == "YES" || grandpa == "yes" || grandpa == "Yes") {
  console.log (grandpaTalk (response));
}
else {
  console.log ("Bye!");
}
