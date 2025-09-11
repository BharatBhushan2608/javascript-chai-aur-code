// console.log("B");
// console.log("H");
// console.log("A");
// console.log("R");
// console.log("A");
// console.log("T");

function sayMyName(){
    // console.log("B");
    // console.log("H");
    // console.log("A");
    // console.log("R");
    // console.log("A");
    // console.log("T");
}
// sayMyName()

function addTwoNumbers (number1 ,number2){
    console.log(number1 + number2);
    
}
// addTwoNumbers()// it gives NaN
// addTwoNumbers(10 , 12)
// addTwoNumbers(10 , "4")

// agr hum jo result mera aaya toh usko hum store kr lenge bt phir usko access nhi kr paayenge aise mein

// const result = addTwoNumbers( 6,8) 
// console.log(result); // output ye dega => undefined  access nhi kr paayenge

// kaise access krenge ab dekho 

function addTwoNumber_1 (num1 , num2){

    // let operationResult  = num1 + num2
    // return operationResult // return use krne k baad hum kuch console likh k print krenge toh wo print nhi hoga

    return num1 + num2
    
}
const operationResult = addTwoNumber_1(17,17)
// console.log("result: " , operationResult)


// function loginUserMessage (userName) {
//     return `${userName} just logged in`
// }
// loginUserMessage("bharat") // isme hum log kahi print krne nhi bole output blank aayega

// console.log(loginUserMessage("bharat"));
// console.log(loginUserMessage()); // if u cant pass any thing then it gives => undifined

function loginUserMessage (userName ) {
    if(!userName){
        console.log("please enter your username") // agr tm chahte ho iske nice kuch n print ho toh return likh do
        return
    }
    return `${userName} just logged in`
}


// console.log(loginUserMessage("bharat"));
// console.log(loginUserMessage());   
// console.log(loginUserMessage("bhushan"));   


// ************************************************

// shopin card jb banaoge

function calculateCarPrice(val1 , val2 , ...nuumm1){ // ... yaha pe isko rest operator bolte hai
    return nuumm1

}
console.log(calculateCarPrice(2,3,4,5,6,7,3,2)); // ye sb ek array mein jake ekk saath print ho jayega or val1 and val2 print nhi hoga kyuki return bs num hi kiye h


function calculateCarPrice(val1 , val2 , ...nuumm1){ // ... yaha pe isko rest operator bolte hai
    return {val1,val2,nuumm1}  /// val1 and val2 yha pe return kiye toh ab print hoga

}
console.log(calculateCarPrice(2,3,4,5,6,7,3,2));  // output => { val1: 2, val2: 3, nuumm1: [ 4, 5, 6, 7, 3, 2 ] }


// agr tum function mein val1 val2 parameters pass kr rhe ho toh jo v arguments ka pehla value hoga wo val1 me jayega or 2nd value val2 me jayega uske baad ka sara value ...nuumm1 mein jayega


//object ko function me kasie pass kiya jata hai

const user = {
    userName : " bharat ",
    price : 342387
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)

}
//handelObject(user)
handelObject({
    userName : "bhushan",
    price : 399
}) //direct yhi pe object pass kr do


// array ko function mein kaise pass kre
const myNewArr = [200, 9000, 7660]

function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([3,6,9])); // direct yhi pe array pass kr do











