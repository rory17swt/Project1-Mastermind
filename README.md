Mastermind

Description:
My Mastermind Game project was created at the end of the first module of the boot camp. Within this project, I used DOM manipulation, event-driven programming, and game logic. The game challenges users to guess
a hidden sequence of colours within 10 attempts, using clues provided by feedback pegs. Built using HTML, CSS, and JavaScript, it showcases interactive UI design and core programming concepts.

Deployment Link:
https://mastermindproject1.netlify.app/

Accessing My Code:
You can find my code on GitHub following this link: https://github.com/rory17swt/Project1-Mastermind

Timeframe / Solo or Team Project:
This project was completed independently over 4 days. I worked solo, managing all aspects of the design, development, and implementation.

Technologies Used:
There was no back-end for this project, only a front-end. I used HTML, CSS (including Grid and Flexbox layout), and JavaScript. The browser game was built using Visual Studio Code.

The Brief:
I was given a selection of games to choose from, of which I selected Mastermind. I selected this game because it presented many challenges. I would need to think outside the box and research to overcome problems,
as there were certain coding problems that we did not specifically cover to make this game function. 
MVP:
-	Render the game in the browser using the DOM manipulation techniques demonstrated in the lecture.
-	Include win/loss logic and render win/loss messages in HTML. The game you chose must have a win/lose condition.
-	Include separate HTML, CSS, JavaScript, and JavaScript data files organised in an appropriate directory structure.
-	Include all required features specific to your game.
-	The game is deployed online so that the rest of the world can play it.
UI/UX: More than two items marked incomplete in this section will require you to use your one redo to re-submit them.
-	CSS Flexbox and/or Grid is used for page layout design.
-	Instructions about how to play the game are included in your app.
-	Colours used on the site have appropriate contrast that meets the WCAG 2.0 level AA standard.
-	All images on the site have alt text.
-	No text is placed on top of an image in a way that makes the text inaccessible.

Planning:
I needed to first ascertain what the board was going to look like before writing out my pseudocode. I looked up what the mastermind board game looked like to use as my base before creating the board.
I then played a few games online to see what functions I needed to include to make the game run:
-	A colour selector.
-	A box to display the players selected colour.
-	Colour inputs on the board.
-	A guess button.
-	A peg display to give the player clues.
-	A win/lose pop-up.
-	A play again button.
-	The game rules.
With all this in mind, I started going through my first thoughts on the code:
-	Random computer colour combination.
-	The colour box needs to be the same as the colour selected on the colour panel.
-	Once a button is selected on the board, that button becomes the selected colour.
-	The player can only select a button on the current row.
-	Once the player has guessed, check if the player's choice matches the computer code, and display the corresponding pegs to give clues.
-	If the player guesses correctly, display a ‘you win’ message. Otherwise, display a ‘you lose’ message if they’ve used up all their guesses.
-	If ‘play again’ is clicked, everything resets.

I then got started on the pseudocode. Here is my completed pseudocode for my checkMatches function:

<pre>
If the current row has no empty colour slots:
For each colour in the current row:
If the colour matches the computer's colour at the same index:
Mark that index in 'matches'
Add a red peg to 'pegArray' (correct colour & correct position)

If there are 4 red pegs:
Display "Win" message
Show "Play Again" button
Hide "Submit" button

For each colour in the current row again:
If the colour does not match at the same position:
For each index in the computer's colour code:
If that index in 'matches' is still empty and the colour matches:
Mark it in 'matches'
Add a white peg to 'pegArray' (correct colour, wrong position)
Exit loop

Find all peg elements for the current row

For each peg in 'pegArray':
Add corresponding peg colour class to board

Reset the current row colours, pegs, and matchs
Move to the row above (-1)
</pre>

Code Process:
I first set up the HTML and base CSS to create the environment before writing the JavaScript, and I realised while setting this up that I was going to be relying on colour classes for player
interaction on the board. I mainly used flexbox and grids to create my board.
My checkMatches function is what I’m most proud of for this project because it came with the most challenges to overcome:

<pre>
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
           </pre>


At first, I had many extensive functions that almost got the result I was looking for, but I realised I could fit everything into one checkMatches function. There was a lot of trial and error 
going through each stage of this function, but after writing out the pseudocode and revising it, I saw that I had a few vital stages missing. Once I connected the dots in my pseudocode, the 
function became clearer to me. Making this function work took me almost an entire day of problem-solving, but eventually the pieces started working together. The main problem I had was understanding 
the nested FOR loops and IF statements; this took me many attempts to get right.
The other function I am proud of is the applyButtonColor function:

<pre>
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
</pre>

One of the challenges I faced was ensuring that the player could only interact with the current active row on the game board. Through research, I discovered that dataset.row allows access to the 
custom data-row attribute on each button element. By using this in a conditional statement, I compared the button’s row value to the currentRow variable. If they matched, the player was allowed to
select a colour for that button, effectively restricting input to only the valid row.

Key Learnings:
This project significantly improved my understanding of programming logic and structure. I developed a clearer approach to planning my code using pseudocode, which helped me organise my thoughts
before writing actual code. I also deepened my knowledge of CSS, particularly on how to use Flexbox and Grid systems to create responsive, well-structured layouts.
One of the most valuable takeaways was strengthening my problem-solving skills in JavaScript. I gained confidence in breaking down challenges and debugging logic errors, something I now understand
is a core part of development. Additionally, I had the opportunity to practice and reinforce JavaScript syntax, and I now feel much more consistent and comfortable using it.

Future Improvements:
If given more time, I would focus on enhancing the user interface and overall user experience. This would include:
-	Improved UI design for a cleaner, more polished board layout.
-	Sound effects to make interactions more engaging.
-	Code reveal at the end of a lost game to provide feedback and closure for the player.
-	User feedback messages or pop-ups to guide the player, for example, notifying them if they try to interact with a row they haven’t unlocked yet.

These improvements would make the game more intuitive, enjoyable, and accessible for a wider audience.
