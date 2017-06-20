=begin
Daniel is a lackadaisical teenager. In conversation, his responses are very limited.
He answers 'Sure.' if you ask him a question.
He answers 'Whatever.' if you tell him something.
He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
He says 'Fine. Be that way!' if you address him without actually saying anything.

Write code in ruby so that you can have an interactive conversation with Daniel.
Make sure you include some testing in order to verify your code.

Hints
gets, get string is the opposite of puts put string.
Notice that when you type "Something" and then hit enter, you get the string "Something\n"

loop do
  # talk to Daniel here
end

Extensions
l33t sP34k
Daniel, inspired by the 90s, is bringing back "l33t sP34k", and he'll teach you how to do it.
Start any sentence with "Bro, ", and he'll translate the rest of it into l33t sP34k for you.

In brief:
Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
Words that start with a consonant start with lower case
Consonants after the first letter alternate upper and lower case,
except the alternation starts over with lowercase after a digit (ex: sCh00l)
=end

loop do
  print "Chat with Danny: "
  my_chat = gets.chomp
  if my_chat.split('').last == '?'
    puts "Sure."
  elsif my_chat == my_chat.upcase
    puts "Woah, chill out!"
  elsif my_chat == 'Daniel' || my_chat == 'daniel'
    puts "Fine. Be that way!"
  elsif my_chat == 'bye'
    break
  elsif my_chat.split(' ').first == 'Bro,' || my_chat.split(' ').first == 'bro,'
    coded_chat = []
    counter = 1
    my_chat.split('').each_with_index do |element, index|
      if my_chat[index + 5] == 'a'
        coded_chat.push('4')
      elsif my_chat[index + 5] == 'e'
        coded_chat.push('3')
      elsif my_chat[index + 5] == 'i'
        coded_chat.push('1')
      elsif my_chat[index + 5] == 'o'
        coded_chat.push('0')
      elsif my_chat[index + 5].scan(/[aeiou]/) == []
        if my_chat[index + 5] == my_chat[index + 5].upcase && counter % 2 == 0
          coded_chat.push(my_chat[index + 5].downcase)
        else
          coded_chat.push(my_chat[index + 5].upcase)
        end
      else
        coded_chat.push(my_chat[index + 5])
        counter += 1
      end
    end
    puts coded_chat.join('').capitalize
  else
    puts "Whatever."
  end
end
