
// const userEmail = "bharat@gmail.com"

// if (userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("don't have user email")
// }

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email")
// } else {
//     console.log("don't have user email")
// }

const userEmail = []

if (userEmail) {
    //console.log("Got user email")
} else {
    //console.log("don't have user email")
}

// falsy value 
// false , 0 , -0 , BigInt 0n , NaN , null , undefined

// truthy value 
// jo v falsy nhi h wo truthy hai
// "0" , " " , "false" , [] , {} , function() ,


// array ko kasie detect kr skte ho wo empty hai ya nhi
if (userEmail.length === 0){
    //console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length) {  // Object.keys(emptyObj) ye line object k key-value ko array me change krte h
    //console.log("object is empty");
    
}

// agr hum console mein run kre ye tin ko toh true aayega // interview
// false == 0  // output true aayega
// false == ""  // output true aayega
// 0 == ""  // output true aayega

// ++++++++++++++++++NULLISH COALESCING OPERATOR (??): +++++++++++++++
// null , undefined pe sari khani yhi operator pe tiki h 

// isko humlog isliye use krte hai ki agr koi database code null pe work n  kre toh value pe kr jaaye
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = undefined ?? 11 ?? 15  // jo pehli value milegi usko le lega

//ye dono mein jo v last me hoga whi use hoga
// val1 = undefined ?? null // isme null
//val1 = null ?? undefined  // isme undefined

//console.log(val1);

// ++++++++++++++  TERNINARY OPEARATOR  +++++++++

// Condition ? true : false 
const iceCreamPrice = 100
iceCreamPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

