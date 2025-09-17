// +++++++++++++++++++++++++++++  MAP ++++++++++++++++++++


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const add10 = myNumbers.map ( (num) => ( num + 10))
// console.log(add10)


// U CAN ALSO USE MULTIPLE MAP AT THE SAME TIME
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const add10 = myNumbers
 .map ( (num) => ( num * 10))
 .map( (num) => num + 2)
 .filter((num ) => num > 40) // agr condition return true tbhi filter run krega
 console.log(add10)


 
 
