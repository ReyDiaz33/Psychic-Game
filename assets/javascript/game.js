// all the possible chices the computer can make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// wins losses guesses left and computer guesses
var win = 0;
var losses = 0;
var guessesLeft = 9;
var letersGuessed = [];
var computerGuess = []; 

window.onload = function(){
    var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerguess[0]);
}