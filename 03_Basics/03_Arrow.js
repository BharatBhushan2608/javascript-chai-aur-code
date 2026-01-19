const user = {
    username : "bharat",
    price : 9999,

    welcomeMessage: function(){ // upr wala value to access krne k liye this use krte h
        console.log(`${this.username} , welcome to website `); // this current context (mtlb varaible) to refer krta hai 
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "bhushan"
// user.welcomeMessage()

// console.log(this) // iska output => {}

function cahi(){

    console.log(this);
    
}
// cahi()

function cahi_1(){
    let username = "bharat"
    console.log(this.username); // function k andr this kuch v print nhi krega
    
}
// cahi_1()


const chai_2 = function(){
    let username = "bharat"
    console.log(this.username);  
}
// chai_2()

//ARROW FUNCTION DECLEARATION

const chai = () => {
    let username = "bharat"
    console.log(this);  
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1+ num2

// }
// console.log(addTwo( 3 , 4));

// implicit return mtlb maan liya ki return hai 

// const addTwo = (num1 , num2) =>  num1+ num2
// const addTwo = (num1 , num2) =>  (num1+ num2) // react mein bht use hua hai ye
// agr return nhi use kr rhe h toh parenthesis use krna hoga

// object kaise return hoga
const addTwo = (num1 , num2) =>  ({username : "bharat" }) 

//console.log(addTwo( 3 , 4));


// const myArray = [2,3,4,5,6]

// myArray.foreach()









