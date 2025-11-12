
const user = {
    Username: "Bharat",
    Logincount: 26 ,
    SignedIn: true ,

    getUserDetails: function  ( ) {
        // console.log("Got user datails from database")
        // console.log(`Username: ${this.Username}`) // agar yaha this nhi likehenge toh error aa jayega kyuki is scope pe username use nhi kiye hai 
        // console.log(this)  //  this yaha pe  pura object show kr dega (this means current context , yaha pe  current context hai user )
    }
}

// console.log(user.Username)
// console.log(user.getUserDetails())
// console.log(this); // yaha oe empty object aayega 


//  ************* CONSTRUCTOR FUNCTION *************

// const promiseOne  = new Promise()
// const date = new Date()
// new key word is contructor function -> it allow ki ek object literals se multiple instances bana lo


// how to use constructor overloading 

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = User("bharat", 26 , true)
const userTwo = User("Bhushan" , 26 , false)

console.log(userOne)