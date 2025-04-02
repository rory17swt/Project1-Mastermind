// * When I load the page I should know what I'm playing

/* Have a "start game" button 
    - clicking "start game" will tell the computer to get its colour combanation
    - The "start game" button will 'hide'
    - The "submit" button will appear
    - The player will be able to select colours

/* The computer will select a colour combanation of 4 colours from a 6 colour range
    - The colours will be selected using an array and I will use math.random for the randomization

/* I can select from an option of 6 colours from the colour panel to input
    - A button will be used for the selection
*/

/* Once a colour is picked I can choose to make 1 of 4 squares(holes) the selected colour
    - This will respond only after a colour has been chosen from the colour panel 
    - I can do this through selecting the square(hole) in the form of a button
*/

/* Once all 4 squares(holes) have been filled with a colour I can submit my guess
    - I will store the selected colours in an array and compare it to the computers chosen to determine the result
    - The 'submit' button can only be pressed once all 4 squares(holes) have been filled with a colour
*/

/* Afetr sumbmitting, depending on the player choice of colours, they will see a white or red peg
    - From the result comparison I will display no pegs, or white or Red pegs
    - White: One or more colours match the computers choice
    - Red: one or more colours match the computers choice and the position


/* Then repeat the process (max of 10 guesses) on the next row until you guess the colour combination or loose
    - If guessed correctly display a "you win" screen with audio, and a promt to play again
    - If guessed incorretly, afetr all 10 guesses, display a "you loose" screen with audio and the computers chosen colour combanation, and a promt to play again
    - if "play again" is pressed the computer will begin the randomization process and the game will start again
*/


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

let currentColor = ''
let currentRow = 10
let currentPegRow = 10
const allColors = ['blue', 'red', 'orange', 'yellow', 'pink', 'green']


// * Computer Code

const computerColorCode = [
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



// * Row change, peg display and code comparrison

function submitFunctions() {

    if (computerColorCode[0] === currentRowColors[0] &&
        computerColorCode[1] === currentRowColors[1] &&
        computerColorCode[2] === currentRowColors[2] &&
        computerColorCode[3] === currentRowColors[3]
    ) {
        console.log('You won!')
    }

    else if (computerColorCode[0] === currentRowColors[0] ||
        computerColorCode[1] === currentRowColors[1] ||
        computerColorCode[2] === currentRowColors[2] ||
        computerColorCode[3] === currentRowColors[3] &&
        dataset.pegRow === currentPegRow
    ) {
        dataset.pegRow.classList.add('red')
    }

    else if (computerColorCode.includes(currentRowColors[0]) ||
            computerColorCode.includes(currentRowColors[1]) ||
            computerColorCode.includes(currentRowColors[2]) ||
            computerColorCode.includes(currentRowColors[3]) &&
            dataset.pegRow === currentPegRow
    ) {
        dataset.pegRow.classList.add('white')
    }

    else {
        console.log('no')
    }
    // currentPegRow -=1
    currentRow -= 1
}


submit.addEventListener('click', submitFunctions)