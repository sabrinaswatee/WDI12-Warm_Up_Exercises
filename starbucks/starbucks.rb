=begin
Starbucks

Write a program that holds on to coffee orders.
c1 = Coffee.new('latte','2 sugars','medium','Darryl')
Write the .to_s method for this class so when you puts c1 you will have "Darryl's latte, medium, 2 sugars."

Extension
Starbucks always gets names wrong, however. Make the name a bad misspelling of the actual name when you create the order.
puts c1
# => "Barrel's latte, medium, 2 sugars."
When you make a new order, you have to wait for coffee. When you create the new order, there should be a waiting time of anywhere between 2-5 minutes. You should be able to check if it's ready by calling c1.ready? and have the program yell out the order and the misspelled name.
You should be able to mark the coffee as collected with c1.collected = true.
List all of the coffees not collected.
Add options to the coffee order, eg shot of hazelnut, whipped cream, chocolate syrup.

Extension 2
Now do it with js.
=end

require 'pry'

# @@order_list = []
counter = 1

class Order

  def initialize
    @order_list = []
  end

  def store (order)
    @order_list.push order
  end
end

Order.new

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

  coffee_name = 'c' + counter.to_s;
  counter += 1

  coffee_name = []
  coffee_name = Coffee.new(input_type, input_sugar, input_size, input_name)
  Order.store coffee_name

  print "Would you like to place another order? (y/n): "
  selection = gets.chomp
end

binding.pry
