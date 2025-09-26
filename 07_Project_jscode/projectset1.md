# Project Related to DOM

##Project link
(https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 ---> ColorScheme Switcher

```javaScript
console.log("Bharat")

document.querySelectorAll('.button')
const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector('body')

buttons.forEach( function (button) {
    console.log(button);

    button.addEventListener('click' , function (e) {
        console.log(e)
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }

    })
});


```


## project 2 --->  BMI CALCULATOR

```javaScript
console.log("Bharat")

document.querySelector('form')
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //apne aap run n ho 


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `The height is not valid ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `The weight is not valid ${weight}`
    }
    else {
        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
        // show the result
        result.innerHTML = `<span>${bmi}</span>`
    }
});

```


## project 3 --->  DIGITAL CALCULATOR

```javaScript
console.log("Bharat")

document.querySelector('form')
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //apne aap run n ho 


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `The height is not valid ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `The weight is not valid ${weight}`
    }
    else {
        const bmi = ((weight / (height * height)) * 10000).toFixed(2);
        // show the result
        result.innerHTML = `<span>${bmi}</span>`
    }
});

```

## project 4 --->  GUESS THE NUMBER

```javaScript
console.log("Bharat")

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


```


## project 5 --->   KEYBOARD

```javaScript
console.log("Bharat")

 const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class='color'> 
    <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key == ' ' ? 'space' : e.key }</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
         
    </table>
    </div>
    `;
    
});


```

## project 6 --->    UNLIMITED COLOR

```javaScript
console.log("Bharat")

// Generate a random color 

const randomColor = function  ( ) {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
        
    }
    return color
};

// console.log (randomColor()); // if u wnat see random color that u generate 

let intervalid;
const startChangingColor = function  ( ) {


    if (!intervalid) {
        intervalid = setInterval(chnageBgColor , 1000)
    }
     
    function  chnageBgColor( ) {
        document.body.style.backgroundColor = randomColor();
        
    } 
}


const stopChangingColor = function  ( ) {
    clearInterval(intervalid);
    intervalid = null;
}

document.querySelector('#start').addEventListener('click' , startChangingColor)


document.querySelector('#stop').addEventListener('click' , stopChangingColor)





```

## project 7 --->   

```javaScript
console.log("Bharat")



```

## project 8 --->    

```javaScript
console.log("Bharat")



```

## project 9 --->    

```javaScript
console.log("Bharat")



```

## project 10 --->    

```javaScript
console.log("Bharat")



```

## project 11 --->    

```javaScript
console.log("Bharat")



```

## project 12 --->    

```javaScript
console.log("Bharat")



## project 13 --->    

```javaScript
console.log("Bharat")



```
## project 14 --->   

```javaScript
console.log("Bharat")



```

## project 15 --->    

```javaScript
console.log("Bharat")



```