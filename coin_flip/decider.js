/*
###The Ultimate Life Decider Never make a decision again!

####Part One - The Coin of Inevitability
Create a file called decider.js
Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
*/

var coinFlip = function () {
  var counter = [0, 0];
  var randomGenerator = Math.floor (Math.random () * 2);

  if (randomGenerator == 0) {
    console.log ('Head');
    counter[0]++;
  }
  else {
    console.log ('Tail');
    counter[1]++;
  }

  if (counter[0] > counter[1]) {
    console.log ('Head is winner!');
  }
  else {
    console.log ('Tail is winner!');
  }
}


/*
#####Part Two - The Coin App
Create a file called decider.html
Find any coin image online
Link the .js file, while you're there you may also decide to add a .css file for some styling
Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.
*/









/*
Solution

var tallyHeads = 0;
var tallyTails = 0;

//find image and print location <h3>
var clickInput = document.getElementById("clickImage");
var tally = document.getElementById("tallyTotal");

//flipped
var coinFlip = function () {
  return (Math.floor(Math.random() * 2) === 0) ? "heads" : "tails";
};

console.log(coinFlip());

//specifying task
var task = function () {
  if (coinFlip() === "heads") {
    tallyHeads++;
  } else {
    tallyTails++;
  };
  if (tallyHeads % 5 == 0) {
    console.log('WINNER!');
  };
  return tally.innerHTML = "You have flipped " + tallyHeads +
  " heads and " + tallyTails + " tails."
};


//listen to click
clickInput.addEventListener("click", task);

console.log(tallyHeads);
*/
