//Print out all the leap years in the last 100 years

var today = new Date();
var currentYear = today.getFullYear();
for (var leapYear = currentYear - 100; leapYear <= currentYear; leapYear++) {
  if (leapYear % 4 == 0) {
    console.log(leapYear);
  }
}

//Print out multiple of 7 from 0-200

for (var multiple = 0; multiple <= 200; multiple++) {
  if (multiple % 7 == 0) {
    console.log(multiple);
  }
}

//Print out every second odd number from 0-200

var odd = 1;
while (odd <= 200) {
  console.log(odd);
  odd += 4;
}

//Print out all prime numbers from 0-200

// var singlePrime = [2, 3, 5, 7];
// for (var i = 0; i < singlePrime.length; i++) {
//   console.log(singlePrime[i]);
// }

for (var singlePrime = 1; singlePrime <= 10; singlePrime ++) {
  if (singlePrime % 2 == 0 && singlePrime % 4 != 0 && singlePrime % 6 != 0 && singlePrime % 8 != 0 && singlePrime % 10 != 0) {
    console.log(singlePrime);
  }
  else if (singlePrime % 3 == 0 && singlePrime % 6 != 0 && singlePrime % 9 != 0) {
    console.log(singlePrime);
  }
  else if (singlePrime % 5 == 0 && singlePrime % 10 != 0) {
    console.log(singlePrime);
  }
  else if (singlePrime % 7 == 0) {
    console.log(singlePrime);
  }
}
for (var doublePrime = 11; doublePrime <= 200; doublePrime += 2) {
  if (doublePrime % 3 != 0 && doublePrime % 5 != 0 && doublePrime != 7) {
    console.log(doublePrime);
  }
}
