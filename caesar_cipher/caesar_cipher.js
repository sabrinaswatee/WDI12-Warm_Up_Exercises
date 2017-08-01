/*
Quiz - Decode this message!

Write a program to decode this message:
FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.
The alphabet is normally:

ABCDEFGHIJKLMNOPQRSTUVWXYZ
The alphabet with the shift parameter of 3 is now as follows:
DEFGHIJKLMNOPQRSTUVWXYZABC
*/

var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";
var messageArray = message.split('');
var decodedMessageArray = [];

for (var counter = 0; counter < message.length; counter++) {
  if (messageArray[counter].match(/[d-z]/) || messageArray[counter].match(/[D-Z]/)) {
    var ascii = messageArray[counter].charCodeAt();
    var asciiShifted = (ascii - 3);
    var asciiShiftedChar =  String.fromCharCode(asciiShifted);
    decodedMessageArray.push(asciiShiftedChar);
  }
  else if (messageArray[counter].match(/[a-c]/) || messageArray[counter].match(/[A-C]/)) {
    var ascii = messageArray[counter].charCodeAt();
    var asciiShifted = (ascii + 23);
    var asciiShiftedChar = String.fromCharCode(asciiShifted);
    decodedMessageArray.push(asciiShiftedChar);
  }
  else {
    decodedMessageArray.push(messageArray[counter]);
  }
}

console.log(decodedMessageArray.join(""));

/*
Extension:
Write the program to encode plain text into messages.
CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')
*/

var extensionMessage = "TWO SYMBOLS KISSING EACH OTHER";
var extensionMessageArray = message.split('');
var codedMessageArray = [];

for (var count = 0; count < extensionMessage.length; count++) {
  if (extensionMessageArray[count].match(/[a-y]/) || extensionMessageArray[count].match(/[A-Y]/)) {
    var extensionAscii = extensionMessageArray[count].charCodeAt();
    var extensionAsciiShifted = (extensionAscii + 3);
    var extensionAsciiShiftedChar =  String.fromCharCode(extensionAsciiShifted);
    codedMessageArray.push(extensionAsciiShiftedChar);
  }
  else if (extensionMessageArray[count].match(/[a-c]/) || extensionMessageArray[count].match(/[A-C]/)) {
    var extensionAscii = extensionMessageArray[count].charCodeAt();
    var extensionAsciiShifted = (extensionAscii + 23);
    var extensionAsciiShiftedChar = String.fromCharCode(extensionAsciiShifted);
    codedMessageArray.push(extensionAsciiShiftedChar);
  }
  else {
    codedMessageArray.push(extensionMessageArray[count]);
  }
}

console.log(codedMessageArray.join(""));

/*
Extension 2:
Write the program to encode it with any shift parameter.
Send each other secret messages.
*/

var myMessage = prompt ('Your message?');
var shiftParameter = prompt ('Parameter?');
var myMessageArray = myMessage.split('');
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var shiftedAlphabets = [];
var encodedMessage =[];

var encodeMyMessage = function (myMessage, shiftParameter) {
  for (var count = 0; count < alphabets.length; count++) {
    if (count < shiftParameter || (count > 25 && count < 26 + shiftParameter)) {
      shiftedAlphabets.push (String.fromCharCode(alphabets[count].charCodeAt() + (26 - shiftParameter)));
    }
    else {
      shiftedAlphabets.push (String.fromCharCode(alphabets[count].charCodeAt() - shiftParameter));
    }
  }

  for (var index = 0; index < myMessage.length; index++) {
    if (myMessageArray[index].match(/[a-z]/) || myMessageArray[index].match(/[A-Z]/)) {
      for (var num = 0; num < alphabets.length; num++) {
        if (myMessageArray[index] == alphabets [num]) {
          encodedMessage.push (shiftedAlphabets[num]);
          break;
        }
        else {
          continue;
        }
      }
    }
    else {
      encodedMessage.push (myMessageArray[index]);
      continue;
    }
  }
  return encodedMessage;
}

var secretMessage = encodeMyMessage (myMessage, shiftParameter);
console.log (secretMessage.join(''));

/*
JS Solution

var caesarSalad = function(str, amount) {
	// Wrap the amount
	if (amount < 0)
		return caesarSalad(str, amount + 26);
	// Make an output variable
	var output = '';
	// Go through each character
	for (var i = 0; i < str.length; i ++) {
		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);
			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		// Append
		output += c;
	}
	// All done!
	return output;
};

// caesarSalad("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3);
// caesarSalad("DEFGHIJKLMNOPQRSTUVWXYZABC", -3);
caesarSalad("FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.", -3);

// caesarSalad("Good Morning, here is your morning warmup. You can choose to do this in Ruby or Javascrip. Have fun... And don't forget to ask questions...", 3);
Ruby Solution

class CesarCipher

  ALPHABET = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)

  def self.decode(string, shift=3)

    decoded = []
    shift = shift.to_i
    string.downcase!

    string.each_char do |char|
      if char == ' '
        decoded << ' '
      elsif ALPHABET.include?(char)
        index = ALPHABET.index(char)
        new_index = index - shift
        decoded << ALPHABET[new_index]
      else
        decoded << char
      end

    end
    decoded.join
  end

  def self.encode(string, shift=3)

    coded = []
    shift = shift.to_i
    string.downcase!

    string.each_char do |char|
      if char == ' '
        coded << ' '
      elsif ALPHABET.include?(char)
        index = ALPHABET.index(char)
        new_index = index + shift
        coded << ALPHABET[new_index]
      else
        coded << char
      end

    end
    coded.join
  end
end

p CesarCipher.encode(' ')

p CesarCipher.decode("QEXKHP JXQQ! VBP F ZXK ABJL! ")
*/
