
const allPegs = document.querySelectorAll('.pegs')
const submit = document.querySelector('#submit')
const boardButtons = document.querySelectorAll('.board-button')
const currentColorBox = document.querySelector('#current-color')
const colorPanel = document.querySelectorAll('.color-button')
const youWon = document.getElementById('you-won')
const playAgain = document.getElementById('play-again')
const youLoose = document.getElementById('you-lost')

let currentRowColors = [
    '',
    '',
    '',
    '',
]

let pegArray = [] // filled with red or white

let matches = [
    '',
    '',
    '',
    '',
]

let currentColor = ''
let currentRow = 10
const allColors = ['blue', 'red', 'orange', 'yellow', 'pink', 'green']


// * Computer Code

let computerColorCode = [
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
    allColors[Math.floor(Math.random() * 6)],
]

console.log(computerColorCode)


// * Changing selected colour Box

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


        }
    })
})


// * Check matches for win, and peg display. Change row & reset arrays

function checkMatches() {
    // Checking full matches
    if (!currentRowColors.includes('')) {
        for (let i = 0; i < currentRowColors.length; i++) {
            if (currentRowColors[i] === computerColorCode[i]) {
                matches[i] = currentRowColors[i]
                pegArray.push('red')
            }
        }
        if (pegArray.length === 4) {
            youWon.style.visibility = "visible"
            playAgain.style.visibility = "visible"
            submit.style.visibility = "hidden"
        }
        // Check partial matches
        for (let i = 0; i < currentRowColors.length; i++) {
            if (currentRowColors[i] !== computerColorCode[i]) {
                for (let idx = 0; idx < computerColorCode.length; idx++) {
                    if (matches[idx] === "" && currentRowColors[i] === computerColorCode[idx]) {
                        matches[idx] = currentRowColors[i]
                        pegArray.push('white')
                        break
                    }
                }
            }
        }
        // place pegs
        const pegRow = document.querySelectorAll(`[data-pegRow="${currentRow}"`)

        // Loop peg placement
        for (let i = 0; i < pegArray.length; i++) {
            pegRow[i].classList.add(pegArray[i])
        }

        // Reset
        currentRowColors = ['', '', '', '']
        pegArray = []
        matches = ['', '', '', '']
        currentRow -= 1
    }
}

submit.addEventListener('click', checkMatches)


// * Check if lost

function checkloose() {

    // if (pegArray.length === 4) {
    //     youWon.style.visibility = "visible"
    //     playAgain.style.visibility = "visible"
    //     submit.style.visibility = "hidden"

    if (currentRow === 0) {
        youLoose.style.visibility = "visible"
        playAgain.style.visibility = "visible"
        submit.style.visibility = "hidden"
    }
}

submit.addEventListener('click', checkloose)


// * Play Again

function clickAgain() {

    currentRow = 10

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

    boardButtons.forEach(btn => {
        btn.className = "board-button"
    })
    allPegs.forEach(peg => {
        peg.className = "pegs"
    })

    submit.style.visibility = "visible"
    youWon.style.visibility = "hidden"
    playAgain.style.visibility = "hidden"
    youLoose.style.visibility = "hidden"
}

playAgain.addEventListener('click', clickAgain)