const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById("submit");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowORhigh = document.querySelector(".lowORhigh");

let previousGuess = [];
let numberGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validatedGuesses(guess);
    });
}

function validatedGuesses(guess){
    if (isNaN(guess)) {
        alert("Please enter a valid number...!");
    } else if(guess < 1){
        alert("Please enter a number larger than 1...!");
    } else if(guess > 100){
        alert("Please enter a number less than 100...!");
    } else {
        previousGuess.push(guess);
        if (numberGuess === 10) {
            displayGuesses(guess);
            displayMessage(`Game Over. Your Random Number Was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuesses(guess);
        }
    }
}

function checkGuesses(guess){
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("You guessed too low");
    } else if (guess > randomNumber) {
        displayMessage("You guessed too high");
    }
}

function displayGuesses(guess){
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numberGuess++;
    remaining.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(message){
    lowORhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    const p = document.createElement("p");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    document.body.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function(e){
        location.reload();
    });
}
