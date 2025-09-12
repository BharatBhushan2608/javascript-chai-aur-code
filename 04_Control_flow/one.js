//control flow

// if
// <, >, <=, >=, ==, ===, !=, !==

// const isLoggedIn = true
// const temperature = 30
// if (temperature > 40){
//     console.log("temp is less than 30");
    
// } else {
//     console.log("temp is greater than 30");
    
// }
// console.log("Executed");

// BLOCK SCOPE 

// const score = 200 

// if (score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`); // it gives error because let is scoped variable

// short hand notaion

const balance = 1000
// if (balance > 500) console.log("you have"); // implicit scope yani ki maan liya maine ki scope hai

// nesting 

// if ( balance < 500) {
//     console.log("less than 500");

// } else if ( balance < 750) {
//     console.log(" less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900")

// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitcard) {  // && and sign
    console.log(" Allow Shopping")    
}

if ( loggedInFromGoggle || loggedInFromEmail) {  // or sign || (means ya toh first condition sahi ho ya toh second condition sahi ho)
    console.log(" User logged in ");
}




