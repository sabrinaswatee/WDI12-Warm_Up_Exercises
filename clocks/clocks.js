/*
Learning Objectives

Practice using jQuery to manipulate the DOM
Practice using JavaScript Timers
Practice using internal JavaScript Objects
Clocks!!!!

cue Coldplay
Today you are going to build a clock!
Start by planning! Draw a clock, break down the problem,

Step 1
Define 3 variables and grab the associated element from the DOM using jQuery:
minuteHand
secondHand
hourHand

Step 2
Using setInterval and jQuery make the second hand make a full rotation in 60 seconds.
You will have to utilize the css attribute transform - rotate.

Step 3
Make the minute hand make a full rotation in 1 hour

BONUS
Sync up your clock with the current time.
Take a look at the JavaScript Date object
*/

var $hour = $('.hour');
var $minute = $('.minute');
var $second = $('.second');
var $hourHand = $('#hour');
var $minuteHand = $('#min');
var $secondHand = $('#sec');

setInterval (function () {
  if ($second.html() == '59') {
    $second.html('0');
  }
  else {
    $second.html(Number ($second.html()) + 1);
  }
  // $secondHand.style.transform = 'rotate';
}, 1000);

setInterval (function () {
  $minute.html(Number ($minute.html()) + 1);
  // $minuteHand.style.transform = 'rotate';
}, 60000);

setInterval (function () {
  $hour.html(Number ($hour.html()) + 1);
  // $hourHand.style.transform = 'rotate';
}, 360000);
