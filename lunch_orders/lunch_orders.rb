=begin
Lunch Orders
It's approaching lunch hour… let's collect orders.
Create a new file called lunch_orders.rb to complete this exercise.

Create a program that collects lunch orders. Prompt:
Name for order: (enter name)
{name} wants to order: (enter item)
Store the name/order data. When storing data, do it in such a way that additional
order items may be added for the person's name.

Example: Greg can order a Burger, and then add Fries to his order later.
After storing data, prompt the user with:
Add another item to the order? (y/n)
Repeat steps 1 & 2 if the answer is "y"
After the user completes adding orders, print out:
"All orders: {order data}"

Keep going...
Rather than printing out a blob of raw lunch order data, print each name's
orders on a separate line, formatted as one of the following:
"Greg ordered a sandwich"
"Peter ordered a burger & fries"
"Travis ordered a salad, apple & water"
You may have to do some hunting in Ruby docs!
=end

order = []

print "Name for order: "
name = gets.chomp

loop do
  print "#{name.capitalize} wants to order: "
  item = gets.chomp
  order.push item
  print "Add another item to the order? (y/n)"
  yes_no = gets.chomp
  break if yes_no == 'n'
end

print "#{name.capitalize} ordered "
if order[0].split('').first.scan(/[aeiou]/) == []
  print "a "
else
  print "an "
end
order.each_index do |index|
  if index == order.length - 2
    print "#{order[index]} & "
  elsif index == order.length - 1
    print "#{order[index]} \n"
  else
    print "#{order[index]}, "
  end
end
