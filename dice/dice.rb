=begin
Dice
Write a program using classes to generate a standard dice roll.
Dice.roll
# => 6

It should give you a different result each time.
Dice.roll
# => 5
Dice.roll
# => 2

When you pass in a number, it rolls the dice that many times,
and returns you the array of rolled dice
Dice.roll(3)
# => [2,5,1]

Extension
Write a method called sum you can chain directly after Dice.roll(n),
and will return you the dice and the total, like so:
Dice.roll(5).sum
# => [[6,6,5,5], 22]
At first you will get a NoMethodError for a certain ruby class.

How do you fix this?
Why do you get a NoMethodError on that class instead of the class you wrote?
Display die faces after rolling.
________
| *  * |
| *  * |
________
=end

require 'pry'

class Dice

  @@rolls = []

  def self.roll(num = 1)
    @@rolls = []
    random_array = []
    if num == 1
      puts Random.rand(1..6)

    else
      num.times do
        random_array.push Random.rand(1..6)
      end
      @@rolls.push random_array
      puts "#{random_array} \n"
    end
    self
  end

  def self.sum
    total = @@rolls[0].sum
    @@rolls.push total
    print @@rolls
  end

end

binding.pry
