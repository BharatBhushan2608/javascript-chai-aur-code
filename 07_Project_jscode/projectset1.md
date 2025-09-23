# Project Related to DOM

##Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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

 

```