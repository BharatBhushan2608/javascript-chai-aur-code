//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// iife => global scope k pollution se problem hoti hai kai baar ton uske pollution or decleration ko htane k liye use krte iife

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})(); // line end krne k liye ye jaruart hai iife mein 

// iffe ko  ab arrow function mein kaise likhenge
// un-named iife
(  () => {
    console.log(`DB CONNECTED TWO`)
}) () ;

// agr isme koi varaible v add krna ho toh

( (name) => {
    console.log(`DB CONNECTED ${name}`)
})('bharat')