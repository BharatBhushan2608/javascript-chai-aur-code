let randomNumber = (parseInt(Math.random()*100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfeild')
const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastresult')
const LowOrHi = document.querySelector('.LowOrHi')
const stratOver= document.querySelector('.resultParas')

const p =document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function  (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)

        validateGuess(guess)
    });
}


function validateGuess(guess){
    if (isNaN(guess)) {
         alert(`Please Enter A Valid Number`)
    }
    else if (guess < 1 ){
        alert(`Please Enter A Number More Than 1`)
    }
    else if (guess > 100 ){
        alert(`Please Enter A Number Less Than 100`)
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was: ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess (guess)
        }
    }

}

function  checkGuess (guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guess It Right`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Your Guessed Number Is Too Low`)
    }
    else if(guess > randomNumber) {
displayMessage(`Your Guessed Number Is Too High`)
    }
}


function  displayGuess( guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++;
    remainingSlot.innerHTML = `${11 - numGuess}`
    
}

function  displayMessage(message) {
    LowOrHi.innerHTML = `<h2> ${message}</h2>`
}

function  endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start new Game</h2>`
    stratOver.appendChild(p);
    playGame = false;
    newGame()
    
}

function  newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function  (e) {
        randomNumber = (parseInt(Math.random()*100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainingSlot.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        stratOver.removeChild(p)
        playGame = true
        
    })
}
