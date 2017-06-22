=begin
When robots come off factory floor, they have no name.
The first time you boot them up, a random name is generated, such as RX837 or BC811
In other words, if I say:
  puts "Robot 1: "              puts "Robot 2: "
  robot1 = Robot.new            robot2 = Robot.new
  puts robot1.name              puts robot2.name
  puts robot1.name              puts robot2.name
  puts robot1.name              puts robot2.name
then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.

Every once in a while we need to reset a robot to its factory settings,
which means that their name gets wiped. The next time you ask, it gets a new name.
if I say:
  puts "Robot 3: "
  robot3 = Robot.new
  puts robot3.name
  puts robot3.name
  puts "Resetting to factory settings."
  robot3.reset
  puts robot3.name
  puts robot3.name
then robot3 will have the same name twice, then we'll get the reset message,
then it will get a new name, and print it twice.
All robots have a mac address. The mac address never changes, even if you reset it to factory settings.

Extensions
Counters
It's important that we not overwork our robots. While resetting to factory defaults is great,
the wear and tear on the robot mechanics doesn't go away. Have your robot track the
total number of operations that have been performed on it.
  puts "Robot 3: "
  robot3 = Robot.new
  puts robot3.name
  puts robot3.name
  puts "Resetting to factory settings."
  robot3.reset
  puts robot3.name
  puts robot3.name
  puts robot3.instruction_count # => 5

Robot Time
Number of instructions is important, but so is the total age of the robot.
  puts "Robot 3: "
  robot3 = Robot.new
  puts robot3.timers # => "21 seconds since last boot, 21 seconds since creation"
  puts robot3.name
  puts "Resetting to factory settings."
  robot3.reset
  puts robot3.timers # => "8 seconds since last boot, 29 seconds since creation"
  puts robot3.name
=end

require 'pry'

class Robot

  def initialize
    @counter = 0
    @creation = Time.now
    @boot = Time.now
    random_name = [('AA'..'ZZ').to_a.sample, ('000'..'999').to_a.sample]
    @name = random_name.join('')
  end

  def name
    @counter += 1
    return @name
  end

  def reset
    random_name = []
    random_name.push Random.rand(65..90).chr
    random_name.push Random.rand(65..90).chr
    random_name.push Random.rand(100..999).to_s
    @name = random_name.join('')
    @counter += 1
    @boot = Time.now
  end

  def instruction_count
    return @counter
  end

  def timers
    @counter += 1
    creation_time = (Time.now - @creation).round
    boot_time = (Time.now - @boot).round
    print "#{boot_time} seconds since last boot, #{creation_time} seconds since creation"
  end

end

# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name
#
# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
#
# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count
#
# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.timers
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.timers
# puts robot3.name

binding.pry
