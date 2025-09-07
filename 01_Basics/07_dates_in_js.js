// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); // types of dates is object 
 
let myCreatedDate = new Date(2023 , 0, 23) // in javascript month will strat from 0 (0  = januray)
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date( 2003 , 7 , 26 , 5, 3)
console.log(myCreatedDateTime.toLocaleString());

let myYearDate = new Date("01-26-2020") // if u want to print in mm-dd-yy format then month start from 1 (1 = january)
console.log(myYearDate.toLocaleString());


// timestamp 

let myTimeStamp =  Date.now()
console.log(myTimeStamp) // it gives the value in milisecond
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());

console.log(Date.now()/1000);// to convert milisecond in second 
console.log(Math.floor(Date.now()/1000)); //to remove decimal


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default' , {
    weekday: "long",
})

console.log(newDate.weekday)









