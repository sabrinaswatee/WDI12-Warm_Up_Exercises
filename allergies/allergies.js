
'use strict';

var list = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];

class Allergies {

  constructor(score) {
    this.score = score;
    this.calculate = score.toString(2);
    this.contain = [];

    for (var i = 0; i < this.calculate.length; i++) {
      if (this.calculate.split('').reverse()[i] == 1) {
        this.contain.push(list[i]);
      }
    }
  };

  get list() {
    return this.contain;
  };

  allergic_to(item) {
    return (this.contain.includes(item)) ? true : false;
  };

};

var allergies = new Allergies(34);
console.log(allergies);
console.log(allergies.list);
console.log(allergies.allergic_to('eggs'));
