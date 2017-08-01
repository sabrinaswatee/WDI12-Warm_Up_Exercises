/*
Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines.
At each position of the grid there is either a space or a “#” character.
The characters should form a chess board.
Passing this string to console.log should show something like this:

# # # # # # # #
 # # # # # # # #
# # # # # # # #
 # # # # # # # #

bonus When you have a program that generates this pattern,
define a variable size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
Then, define a variable 'symbol' that generates the board using the specified character instead.
*/

var height = prompt ('Height?');
var width = prompt ('Width?');
var symbol = [];

for (var i = 1; i <= height; i++) {
  for (var j = 1; j <= width * 2; j++) {
    if ((i + j) % 2 == 0) {
      symbol.push('#');
    }
    else {
      symbol.push(' ');
    }
  }
  console.log(symbol.join('') + '\n');
  symbol = [];
}
