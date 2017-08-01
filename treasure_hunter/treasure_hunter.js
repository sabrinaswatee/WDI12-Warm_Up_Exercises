/*
It belongs in a museum!
You are an adventuring archaeologist, and have found some treasure maps!
There are too many to check individually, so write a function 'treasureFinder'
that takes an array of arrays as an argument (see sample inputs below) and returns
an array with the location of the treasure (X) as an array representing the
X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];
// Sample output:
treasureFinder(map1) // should return [2, 2];
You can assume that the size of the treasure map will be the same.

Some additional maps:
var map2 = [                  var map3 = [                  var map4 = [
["A","A","A","A","A"],        ["A","A","A","A","A"],        ["A","A","A","A","A"],
["A","A","A","A","A"],        ["A","A","V","A","A"],        ["A","A","V","A","A"],
["A","A","A","A","A"],        ["A","A","A","V","A"],        ["A","A","A","V","A"],
["A","A","A","A","A"],        ["v","v","V","v","X"],        ["v","v","V","v","A"],
["A","X","A","A","A"]         ["A","V","A","A","A"]         ["X","V","A","A","A"]
];                            ];                            ];

*/

var treasureFinder = function (bigArray) {
  for (var i = 0; i < bigArray.length; i++) {
    var smallArray = bigArray[i];
    for (var j = 0; j < smallArray.length; j++) {
      if (bigArray[i][j] == 'X') {
        console.log ('[' + i + ', ' + j + ']');
      }
    }
  }
};

var bigArray = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

treasureFinder (bigArray);

/*
Bonus:

Modify your function to accept maps of any size, and to accept a second argument
for the key to look for. It should also handle non-unique 'key' values gracefully.

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

//sample outputs:
streasureFinder(holyGrailMap, "G") // should return [4, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];
treasureFinder(holyGrailMap, "H") // should return [5, 2];
treasureFinder(holyGrailMap, "V") // should return 'that doesnt belong in a museum!';
*/

var counter = 0;

var treasureFinder = function (bigArray, letter) {
  for (var i = 0; i < bigArray.length; i++) {
    var smallArray = bigArray[i];
    for (var j = 0; j < smallArray.length; j++) {
      if (bigArray[i][j] == letter) {
        console.log ('[' + i + ', ' + j + ']');
      }
    }
    if (smallArray.indexOf (letter) == -1) {
      counter++;
    }
  }
  if (counter == bigArray.length) {
    console.log ("that doesn't belong in a museum!");
  }
  counter = 0;
};

var bigArray = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

treasureFinder (bigArray, 'G');
treasureFinder (bigArray, 'H');
treasureFinder (bigArray, 'B');
