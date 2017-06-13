/*
You are a villain trying to trap an adventuring archaeologist. Write a function
'makeFakeMap' that takes two numbers as arguments and returns an array of arrays
to represent a map. It should be filled with the 'A' character, except for one,
which should be an uppercase X(as below). The position of X should be determined
randomly.

makeFakeMap(5, 5);

// Sample outputs:

[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

makeFakeMap(5, 5);

[
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","X"],
["A","A","A","A","A"]
];

makeFakeMap(5, 5);

[
["A","A","A","A","A"],
["A","A","A","X","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];
*/

var largeArray =[];
var printArray = [];

var makeFakeMap = function (num1, num2) {
  var randomNum1 = Math.floor (Math.random () * num1);
  var randomNum2 = Math.floor (Math.random () * num2);

  for (var row = 0; row < num1; row ++) {
    for (var column = 0; column < num2; column++) {
      if (row == randomNum1 && column == randomNum2) {
        printArray[column] = '"X"';
      }
      else {
        printArray[column] = '"A"';
      }
    }
    largeArray.push (printArray);
    printArray = [];
  }
  var finalArray = [(largeArray.join('],\n['))];
  finalArray.push (']\n]');
  finalArray.unshift ('[\n[');
  console.log (finalArray.join (''));
};

makeFakeMap (5, 5);
