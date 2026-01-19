// singleton
Object.create


// object literals

// how to add this symbol in object  ***interview purpose***
const mySym = Symbol("kyhero")

const jsUser = {
    "nick name" : "bhussi", //isko acces kr liye humlog ko yhi use krna hoga console.log(jsUser["nick name"])
    name : "bharat" ,
    [mySym] : "kyhero" ,  //asie daal skte symbol ko object mein 
    age : "22",
    location : "greater noida" ,
    email : "hitesh@google.com" ,
    isLoggedIn : false,
    lastLoginDays : ["monday" , "tuesday"]

}
// console.log(jsUser.email);
// // another way to access the value { better way }
// console.log(jsUser["email"]);
// console.log(jsUser["nick name"])
// console.log(jsUser[mySym]); // asie access krte h symbol wala value ko 

// how to change any value from object 
jsUser.email = "bhushan@gmail.com"
// Object.freeze(jsUser) // after using freeze u cant change any value in object
jsUser.email = "bb@chatgpt.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

// using inter-polation 
jsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

