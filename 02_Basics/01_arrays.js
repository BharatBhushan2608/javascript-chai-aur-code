// ARRAYS

const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);

// way to define array
const myHeros = ["shaktimaan" , "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[3])

// ARRAY METHOD

// myArr.push(6)
// myArr.push(7)
// myArr.pop(); //it directly remove the last element of array

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(6)); //result in boolean type true ya false 
// console.log(myArr.indexOf(9)); // if elemnt is not present then it gives -1
// console.log(myArr.indexOf(6)); // itgies inedx number 


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);// result not give in from of array (gives in from of string)
// console.log(typeof newArr);

// slice and splice 

console.log("A " , myArr)

//const myn1 = myArr.slice(starting-point,how many number u have to print(last number is not include))
const myn1 = myArr.slice(1,3) // it print the value 1 and 2

console.log(myn1);
console.log("B " , myArr)

const myn2 = myArr.splice(1,3); // it remove the value start from 1 and goes to 3 
console.log("c " , myArr);
console.log(myn2);


