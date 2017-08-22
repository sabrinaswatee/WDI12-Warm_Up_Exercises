
var stringOne = prompt ('Input string 1: ');
var stringTwo = prompt ('Input string 2: ');

var array = _.union(_.toArray(stringOne), _.toArray(stringTwo));
console.log (_.sortBy(array).join(''));
