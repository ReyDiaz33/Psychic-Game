// all the possible chices the computer can make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// wins losses guesses left and computer guesses
var win = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = []; 

var length = computerChoices.length;
console.log(length);

var random = Math.floor((Math.random() * length));
console.log(random);



/*
computer picks a letter 
person guesses letter
if right then wins
if wrong has 9 more chances 
if wrong 9 times losses

*/
