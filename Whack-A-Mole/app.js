const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitposition
let currentTime = 15
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitposition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitposition) {
            result++
        score.textContent = result
        hitposition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is:' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
