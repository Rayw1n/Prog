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
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissor'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'You Win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissor") {
        result = 'You Lose!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissor") {
        result = 'You Win!'
    } 
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'You Lose!'
    } 
        if (computerChoice === 'Scissor' && userChoice === "Rock") {
        result = 'You Win!'
    }
        if (computerChoice === 'Scissor' && userChoice === "Paper") {
        result = 'You Lose!'
        }
    resultDisplay.innerHTML = result
}
