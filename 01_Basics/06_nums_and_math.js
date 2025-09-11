const score = 400 // it give output only 400

//it allways give number
const balance =  new Number(100) // it gives output like this [Number: 100]
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // it means that i convert number into decimal

const otherNumber = 26.6666
// console.log(otherNumber.toPrecision(4)); // it give focus on how many number that is given in precision

const vinatge = 1000000
// console.log(vinatge.toLocaleString('en-IN'))



// ******************* MATHS *******************

// console.log(Math);
// console.log(Math.abs(-4)); // it convert only neagtive number to positive
// console.log(Math.round(4.3)); // it roundoff
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1)); // point k badd jara sa v value jyda hua toh number increase kr jayega
// console.log(Math.floor(4.6)); // point k baad kita v value ho jaye 4.9 ya 4.6 ya 4.1 ye 4 hi hoga
// console.log(Math.sqrt(25));
// console.log(Math.tanh(23));
// console.log(Math.min(4,5,6,3,2,6,4));
// console.log(Math.max(4,5,6,3,2,6,4));

console.log(Math.random()); // it give random value between 0 and 1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// kaise nikale is dono k beech ka value

console.log(Math.floor(Math.random() * (max - min  + 1 ) + 10));









