/*
In JavaScript, write a function 'spiner' that takes a string as an argument and
returns the string as all lowercase words joined by dashes. Your function should
count for upper/lower case inputs, as well as sentences not seperated by spaces.

spiner("All Lowercase Words Joined By Dashes") --> // "all-lowercase-words-joined-by-dashes"

spiner("The_Andy_Griffith_Show") --> // "the-andy-griffith-show"
*/

var spiner = function (input) {
  var regexp = /[\W_0-9]/g;
  return input.split(regexp).join('-').toLowerCase();
};

var input = prompt('Enter: ');
console.log (spiner(input));
