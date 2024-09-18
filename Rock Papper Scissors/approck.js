const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'StenJävel'
    }
    if (randomNumber === 2) {
        computerChoice = 'SaxJävel'
    }
    if (randomNumber === 3) {
        computerChoice = 'Påsjävel'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Ni förlorade tillsammans'
    }
    if (computerChoice === 'StenJävel' && userChoice === "Påsjävel") {
        result = 'Tur, Du vann'
    }
    if (computerChoice === 'StenJävel' && userChoice === "SaxJävel") {
        result = 'Din Idiot!'
    }
    if (computerChoice === 'Påsjävel' && userChoice === "SaxJävel") {
        result = 'Tur, Du vann'
    } 
    if (computerChoice === 'Påsjävel' && userChoice === "StenJävel") {
        result = 'Din Idiot!'
    } 
        if (computerChoice === 'SaxJävel' && userChoice === "StenJävel") {
        result = 'Tur, Du vann'
    }
        if (computerChoice === 'SaxJävel' && userChoice === "Påsjävel") {
        result = 'Din Idiot!'
        }
    resultDisplay.innerHTML = result
}
