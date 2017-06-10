/*
###Mini Golf Scores
####Exercise Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy the 19th hole the most.
Every time they hand in their score cards none of the scores are ever totalled.
Write a function called totalScores in JS that calculates their scores and 'console.logs' the total for the club house.

#####Bob                #####Jimbo                #####Fish
Hole 1 = 3              Hole 1 = 5                Hole 1 = 2
Hole 2 = 2              Hole 2 = 12               Hole 2 = 2
Hole 3 = 6              Hole 3 = 9                Hole 3 = 4
Hole 4 = 11             Hole 4 = 22               Hole 4 = 5
Hole 5 = 9              Hole 5 = 13               Hole 5 = 4
Hole 6 = 2              Hole 6 = 7                Hole 6 = 3
Hole 7 = 6              Hole 7 = 16               Hole 7 = 6
Hole 8 = 9              Hole 8 = 10               Hole 8 = 4
Hole 9 = 10             Hole 9 = 11               Hole 9 = 1

####Extension Now work out each golfers round compared to the course par.
#####Par
Hole 1 = 3
Hole 2 = 4
Hole 3 = 5
Hole 4 = 5
Hole 5 = 3
Hole 6 = 3
Hole 7 = 4
Hole 8 = 3
Hole 9 = 5

####Ninja Extension Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.
*/

var golfScores = [
  {
    name: 'Bob',
    scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  {
    name: 'Jimbo',
    scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  {
    name: 'Fish',
    scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
];
var total = 0;
var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];
var diff = [];

var getIndex = function (name) {
  for (var num = 0; num < golfScores.length; num++) {
    if (golfScores[num].name == name) {
      return num;
    }
  }
}

var totalScores = function (name) {
  var index = getIndex (name);
  for (var count = 0; count < golfScores[index].scores.length; count++) {
    total += golfScores[index].scores[count];
  }
  console.log (name + ': ' + total);
}

var checkPar = function (name) {
  var index = getIndex (name);
  for (var number = 0; number < golfScores[index].scores.length; number++) {
    diff.push(golfScores[index].scores[number] - par[number]);
  }
  console.log (diff);
}

var name = prompt ('Name?');
totalScores (name);
checkPar (name);


/*
Solution 1: Scoring method as described in warmup:

var scoreBob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var scoreJimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var scoreFish = [2, 2, 4, 5, 4, 3, 6, 4, 1];

var totalScore = function (name) {
  if (name === "Bob") {
      var totalBob = 0;
      for (var i = 0; i < 9; i++) {
        totalBob += scoreBob[i];
      }
      return totalBob;
  } else if (name === "Jimbo") {
      var totalJimbo = 0;
      for (var i = 0; i < 9; i++) {
        totalJimbo += scoreJimbo[i];
      }
      return totalJimbo;
  } else if (name === "Fish") {
      var totalFish = 0;
      for (var i = 0; i < 9; i++) {
        totalFish += scoreFish[i];
      }
      return totalFish;
  }
};

totalScore("Bob");
totalScore("Jimbo");
totalScore("Fish");

var scorePar = [3, 4, 5, 5, 3, 3, 4, 3, 5];

var par = function () {
var totalPar = 0;
    for (var i = 0; i < 9; i++) {
      totalPar += scorePar[i];
    };
    return totalPar
}

var parScoreBob = totalScore("Bob") - par();
var parScoreJimbo = totalScore("Jimbo") - par();
var parScoreFish = totalScore("Fish") - par();

var earningsFish = parScoreJimbo - parScoreBob;
Solution 2: Actual golf scoring method:

var bobScores = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimboScores = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fishScores = [2, 2, 4, 5, 4, 3, 6, 4, 1];

var bobTotal = bobScores.reduce(function(a, b) {
  return a + b;
}, 0)

console.log(bobTotal);

function totalScores(scoreCard) {
  var coursePars = [3, 4, 5, 5, 3, 3, 4, 3, 5];
  var totalScore = 0;
  var overPars = 0;
  for (var i = 0; i < scoreCard.length; i++) {
    if (scoreCard[i] < coursePars[i]) {
      totalScore -= coursePars[i] - scoreCard[i];
    } else if (scoreCard[i] > coursePars[i]) {
      overPars += scoreCard[i] - coursePars[i];
      totalScore += scoreCard[i] - coursePars[i];
    }
  }
  return [totalScore, overPars];
}

totalScores(coursePars) - totalScores(jimboScores );

console.log(totalScores(bobScores));
console.log(totalScores(jimboScores));
console.log(totalScores(fishScores));
*/
