const options = ["r", "p" , "s"]
let wins = 0
let loses = 0
let ties = 0

document.onkeyup = function() {
    const userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    const computerGuess = options[math.floor(Math.random()*options.length)];

    if (userGuesses == "r" || "p" || "s") {
        if ((userGuesses == "r") && (computerGuess == "p")) {
            alert ("you lose");
        }
        if ((userGuesses == "r") && (computerGuess == "s")) {
            alert ("you win");
        }
        if ((userGuesses == "p") && (computerGuess == "s")) {
            alert ("you lose");
        }
        if ((userGuesses == "p") && (computerGuess == "r")) {
            alert ("you win");
        }
        if ((userGuesses == "s") && (computerGuess == "p")) {
            alert ("you win");
        }
        if ((userGuesses == "s") && (computerGuess == "r")) {
            alert ("you lose");
        }
        if ((userGuesses==computerGuess)) {
            alert ("you tie");
        }
    } else {
        alert ("Please choose r, p or s");
    }
}