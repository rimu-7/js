const randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#submit")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const remaining = document.querySelector(".lastResult")

const p = document.querySelector("p")

let previousGuess = []
let numberGuess = 1
let playGame = true
 

if (playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput)
    })
}