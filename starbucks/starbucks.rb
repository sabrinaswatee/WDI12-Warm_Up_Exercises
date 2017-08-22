
require 'pry'

counter = 1

class Coffee

  attr_accessor :type, :sugar, :size, :name

  def initialize (input_type, input_sugar, input_size, input_name)
    @type = input_type
    @sugar = input_sugar
    @size = input_size
    @name = input_name.capitalize
  end

  def to_s
    print "#{name}'s #{type}, #{size}, #{sugar} sugars \n"
  end

end

order_list = []

puts "Welcome to Starbucks Self-order App"
print "Would you like to place an order? (y/n): "
selection = gets.chomp

while selection == 'y'
  print "Type of coffee: "
  input_type = gets.chomp
  print "No of Spoons of sugar: "
  input_sugar = gets.chomp.to_i
  print "Size of coffee: "
  input_size = gets.chomp
  print "Name of customer: "
  input_name = gets.chomp

  # coffee_name = 'c' + counter.to_s;
  # counter += 1
  #
  # coffee_name = []
  c1 = Coffee.new(input_type, input_sugar, input_size, input_name)
  order_list.push(c1)

  print "Would you like to place another order? (y/n): "
  selection = gets.chomp
end

binding.pry

=begin
Solution

require 'pry'

class Coffee
  # Class method to keep track of all coffees
  @@all_coffees = []
  # Cheater way to collect coffee
  attr_accessor :collected

  # Sets up the new coffee with arguments passed in
  def initialize(coffee, sugars, size, name)
    # Sets the new object's name to the misspelled version
    @name = misspell(name)
    @coffee = coffee
    # Makes sure the sugar number is an integer
    @sugars = sugars.to_i
    @size = size
    # Sets the order time to the creation date
    @ordered_at = Time.now
    # Sets the wait time to a random time between 2 and 5 mins in seconds
    @wait_time = (160..300).to_a.sample
    # Initializes the object as not collected
    @collected = false
    # Puts this coffee inside the class variable.
    # self here refers to the new object.
    @@all_coffees << self
  end

  # Method to check if coffee is ready
  def ready?
    # Checks if the time that ready? is called is passed the order time + wait time
    if Time.now > @ordered_at + @wait_time
      # Yells the order to collect
      puts "#{@coffee} for #{@name}???".upcase
      # Still returns true
      true
    else
      # Else returns false
      false
    end
  end

  # Class method to be able to call Coffee.collected_list
  # This makes more sense to call it on the class rather than the single coffee object
  # self here refers to the class, not the object
  def self.collected_list
    @@all_coffees.select {|coffee| coffee.collected == true}
  end

  def self.not_collected_list
    @@all_coffees.select {|coffee| coffee.collected == false}
  end

  # to_s method for human readble output to puts the object later
  def to_s
    "#{@name}'s #{@coffee}, #{@size}, #{@sugars} sugars."
  end

  # private means these methods will only be able to be used inside
  private
  def misspell(name)
    name.gsub(/[aeiouy]/, %w(a e i o u y).sample)
    # name.gsub(/^[aeiouy]/, %w(b c d f g h j k l m n p q r s t v w x y z).sample)
  end

end

c1 = Coffee.new('latte','2 sugars','medium','Darryl')
c2 = Coffee.new('flat white', 'no sugar', 'large', 'Mary-Louise')
c3 = Coffee.new('short black', 'no sugar', 'short', 'Matt')


# p c1
puts c1
puts c2
puts c3


binding.pry
=end
