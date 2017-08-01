=begin
Scrabble Score
Write a program that, given a word, computes the scrabble score for that word.

Scrabble.score("cabbage")
# => 14
Your program should be in a file named scrabble.rb.

Letter Values
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

Extensions
You can play a :double or a :triple letter.
You can play a :double or a :triple word.
=end

require 'pry'

class Scrabble

  def self.score(word)
    print "None, double letter, triple letter, double word or triple word: "
    play = gets.chomp.downcase
    @board = [1, 2, 3, 4, 5, 8, 10]
    @letter = ['[AEIOULNRST]', '[DG]', '[BCMP]', '[FHVWY]', '[K]', '[JX]', '[QZ]']

    if (play == 'double letter' || play == 'triple letter')
      print "Letter: "
      play_letter = gets.chomp.upcase
    end

    score = 0
    boolean = false

    word.split('').each_index do |index|
      counter = 0
      loop do
        if word[index].upcase.scan(Regexp.new(@letter[counter])) != []
          if (play == 'double letter' && play_letter == word[index].upcase)
            score += @board[counter] * 2
          elsif (play == 'triple letter' && play_letter == word[index].upcase)
            score += @board[counter] * 3
          else
            score += @board[counter]
          end
          boolean = true
        else
          counter += 1
          boolean = false
        end
        break if (boolean == true)
      end
    end

    if (play == 'double word')
      puts score * 2
    elsif (play == 'triple word')
      puts score * 3
    else
      puts score
    end
  end

end

binding.pry
