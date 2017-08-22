Solution

function Coffee(type, sugars, size, name) {
  this.type = type;
  this.sugars = sugars;
  this.size = size;
  this.name = name;
  this.ready = false;
  this.startMakingMyCoffee();
}

Coffee.prototype.printOrder = function() {
  console.log(this.name + '\'s ' + this.type + ', ' + this.size + ', ' + this.sugars + ' sugars.');
};

Coffee.prototype.startMakingMyCoffee = function() {
  that = this;
  setTimeout(function() {
    console.log(that.name + '\'s coffee is ready!');
    that.ready = true;
  }, 10000);
};


//testing it
// h = new Coffee('latte', '2', 'medium', 'Harry');

// h.printOrder();
