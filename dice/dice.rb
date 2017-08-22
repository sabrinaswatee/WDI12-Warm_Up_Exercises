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
  @@dice_face = [
    ["|   |", "| * |", "|   |"],
    ["|   |", "|* *|", "|   |"],
    ["|   |", "|***|", "|   |"],
    ["|* *|", "|   |", "|* *|"],
    ["|* *|", "| * |", "|* *|"],
    ["|* *|", "|* *|", "|* *|"],
    ["|* *|", "|***|", "|* *|"],
    ["|***|", "|* *|", "|***|"],
    ["|***|", "|***|", "|***|"],
  ]

  def self.print_dice (count)
    counter = 0
    puts "_____"
    3.times do
      puts @@dice_face[count - 1][counter]
      counter += 1
    end
    puts "_____"
  end

  def self.roll(num = 1)
    @@rolls = []
    random_array = []
    if num == 1
      random_num = Random.rand(1..6)
      puts random_num
      print_dice(random_num)
    else
      num.times do
        randon_num = Random.rand(1..6)
        random_array.push random_num
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

=begin 
require 'pry'

class Dice

  def self.roll num=nil
    return puts display_face rand(1..6) if num == nil

    results = []
    num.times do
      roll = rand(1..6)
      results.push roll
      puts display_face roll
    end
    new results
  end

  def self.display_face num
    face = [" ----- "]
    if num == 1
      face.push "|     |", "|  *  |", "|     |"
    elsif num == 2
      face.push "|  *  |", "|     |", "|  *  |"
    elsif num == 3
      face.push "| *   |", "|  *  |", "|   * |"
    elsif num == 4
      face.push "| * * |", "|     |", "| * * |"
    elsif num == 5
      face.push "| * * |", "|  *  |", "| * * |"
    elsif num == 6
      face.push "| * * |", "| * * |", "| * * |"
    end
    face.push " ----- "
  end

  def initialize values
    @values = values
  end

  def sum 
    output = [@values]
    sum = 0
    @values.each { |v| sum += v }
    output.push sum
  end

end

binding.pry
=end

