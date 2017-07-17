/*
Done?
Solve it with a JavaScript function!
Store your solution in a new file called getSquares.js and run it in the console.
HINT: Sorting an array of numbers with .sort in JS would produce the following...
getSquares([4, 1, 16, 1, 10, 35, 22]); // => [ 1, 16, 4 ]
What's that all about?!?!?!
*/

var getSquares = function (array) {
  var squareArray = [];
  for (var index = 0; index < array.length; index++) {
    if (Math.sqrt(array[index]) == Math.round(Math.sqrt(array[index])))
      squareArray.push(array[index]);
  }
  console.log (squareArray);


  squareArray.sort(function(a, b) {
    return a - b;
  });
  //
  // squareArray.map ()
};
