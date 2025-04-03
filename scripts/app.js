// * When I load the page I should know what I'm playing


const allPegs = document.querySelectorAll('.pegs')
const submit = document.querySelector('#submit')
const boardButtons = document.querySelectorAll('.board-button')
const currentColorBox = document.querySelector('#current-color')
const colorPanel = document.querySelectorAll('.color-button')

let currentRowColors = [
    '',
    '',
    '',
    '',
]

let pegArray = [] // filled with red or white

const matches = [
    '',
    '',
    '',
    '',
]

let currentColor = ''
let currentRow = 10
let currentPegRow = 10
const allColors = ['blue', 'red', 'orange', 'yellow', 'pink', 'green']


// * Computer Code

let computerColorCode = [
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
]

console.log(computerColorCode)


// * Changing selected colour Box  // bear notes

function ChangeColor(event) {

    currentColor = event.target.id

    currentColorBox.classList.remove('blue', 'red', 'orange', 'yellow', 'pink', 'green')
    currentColorBox.classList.add(currentColor)
}

colorPanel.forEach(btn => {
    btn.addEventListener('click', ChangeColor)
})


// * Checking if I can apply Colour to row and storing button colour in array 

boardButtons.forEach(btn => {
    btn.addEventListener('click', function applyButtonColor(event) {

        if (Number(btn.dataset.row) === currentRow) {
            const buttonColor = event.target
            buttonColor.classList.add(currentColor)

            currentRowColors[btn.dataset.index] = currentColor

            console.log(currentRowColors)
        }
    })
})


// * Check matches

// * Check[0]

function checkMatches0() {

    if (currentRowColors[0] === computerColorCode[0]) {
        matches[0] = currentRowColors[0];
        console.log(matches)
    }
    else if (!matches[0]) {
        currentRowColors[0] === computerColorCode[0] ||
            currentRowColors[0] === computerColorCode[1] ||
            currentRowColors[0] === computerColorCode[2] ||
            currentRowColors[0] === computerColorCode[3],
            console.log('display white')
    }
}

submit.addEventListener('click', checkMatches0)

// * Check[1]

function checkMatches1() {

    if (currentRowColors[1] === computerColorCode[1]) {
        matches[1] = currentRowColors[1],
            console.log(matches)
    }
    else if (!matches[1]) {
        currentRowColors[1] === computerColorCode[0] ||
            currentRowColors[1] === computerColorCode[1] ||
            currentRowColors[1] === computerColorCode[2] ||
            currentRowColors[1] === computerColorCode[3],
            console.log('display white')
    }
}

submit.addEventListener('click', checkMatches1)

// * Check[2]

function checkMatches2() {

    if (currentRowColors[2] === computerColorCode[2]) {
        matches[2] = currentRowColors[2],
            console.log(matches)
    }
    else if (!matches[2]) {
        currentRowColors[2] === computerColorCode[0] ||
            currentRowColors[2] === computerColorCode[1] ||
            currentRowColors[2] === computerColorCode[2] ||
            currentRowColors[2] === computerColorCode[3],
            console.log('display white')
    }
}

submit.addEventListener('click', checkMatches2)

// * Check[3]

function checkMatches3() {

    if (currentRowColors[3] === computerColorCode[3]) {
        matches[3] = currentRowColors[3],
            console.log(matches)
    }
    else if (!matches[3]) {
        currentRowColors[3] === computerColorCode[0] ||
            currentRowColors[3] === computerColorCode[1] ||
            currentRowColors[3] === computerColorCode[2] ||
            currentRowColors[3] === computerColorCode[3],
            console.log('display white')
    }
}

submit.addEventListener('click', checkMatches3)

// * Check win or loose

const youWon = document.getElementById('you-won')
const playAgain = document.getElementById('play-again')
const youLoose = document.getElementById('you-lost')

function checkWin() {
    if (matches[0] === computerColorCode[0] &&
        matches[1] === computerColorCode[1] &&
        matches[2] === computerColorCode[2] &&
        matches[3] === computerColorCode[3]) {
        youWon.style.visibility = "visible"
        playAgain.style.visibility = "visible"
        submit.style.visibility = "hidden"
    }
    else if (currentRow === 1) {
        youLoose.style.visibility = "visible"
        playAgain.style.visibility = "visible"
        submit.style.visibility = "hidden"
    }
}

submit.addEventListener('click', checkWin)

// * Peg index moover

const currentPegEl = document.querySelectorAll(`[dataset-pegRows]`)

function movePegIndex() {

if (Number(currentPegEl) === currentPegRow) {

    for (let i = 0; i < pegArray.length; i++) {
        currentPegEl[0].classList.add(pegArray[i])
    }
}
}

submit.addEventListener('click', movePegIndex)


// * Change row

function changeRow() {
    currentRow -= 1
    currentPegRow -= 1
}

submit.addEventListener('click', changeRow)

// * Play Again

function clickAgain() {

    currentRow = 10
    currentPegRow = 10

    while (computerColorCode.length > 0) {
        computerColorCode.pop()
    }
    computerColorCode = [
        allColors[Math.floor(Math.random() * 6)],
        allColors[Math.floor(Math.random() * 6)],
        allColors[Math.floor(Math.random() * 6)],
        allColors[Math.floor(Math.random() * 6)],
    ]
    console.log(computerColorCode)

    // boardButtons.classList.add('.white')
    // allPegs.classList.add('.black')

    submit.style.visibility = "visible"
    youWon.style.visibility = "hidden"
    playAgain.style.visibility = "hidden"
    youLoose.style.visibility = "hidden"
}

playAgain.addEventListener('click', clickAgain)