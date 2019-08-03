// all the possible chices the computer can make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// wins losses guesses left and computer guesses
var win = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

function getRandomLetter() {
    var length = computerChoices.length;
    var random = Math.floor((Math.random() * length));
    return computerChoices[random];
}

var choosenLetter = getRandomLetter();
console.log('Letter Chosen is:',choosenLetter); // TODO: delete

document.onkeypress = function(event) {
    // Keypress event sent from browser.
    event = event || window.event;

    // Get the character code from the event. 
    var charCode = event.which || event.keyCode;

    // Convert it to a character string.
    var charStr = String.fromCharCode(charCode);
    
    // Do something with it, yo!
    console.info('user chose:', charStr);

    /*
        -> Did the user win? 
            -> yes: what do we need to do?
                -> add a win to the win var
                -> reset user choices
                -> reset computerChoice

            -> no: what do we need to do?
               -> decrement (-1) choices left 
               -> has the user guesses max times?
                 -> yes
                    -> increment loss
                    -> reset guesses left
                    -> reset guesses so far
                    -> reset computerChoice
                 -> no 
                   -> add to gueses so far
    */

  };

/*
computer picks a random letter (X) 
person guesses letter 
if right then wins
if wrong has 9 more chances 
if wrong 9 times losses

*/
