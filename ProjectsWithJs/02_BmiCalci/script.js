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