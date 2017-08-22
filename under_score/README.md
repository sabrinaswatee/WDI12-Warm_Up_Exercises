Take 2 strings s1 and s2 including only letters from `a` to `z`. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

We recommend using `underscore.js` to help with solving the problem: http://underscorejs.org/

Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
