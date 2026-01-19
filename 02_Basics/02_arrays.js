// how to join two array in a single array 

const marvelHeros = ["thor" , "ironman" , "spiderman"]
const dcHeros = ["superman" , "flash" , "batman"]

// push jo hai wo direct array ko utha k ek aaray k andr rakh deta hai 
// marvelHeros.push(dcHeros) //push mein direct push kr skte
// console.log(marvelHeros)
// result => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1])

// conact  // conacat mein humko ek varaible bna k value store krna hota hai uske baaad hum usko acces kr skte hai 

const allHeros = marvelHeros.concat(dcHeros)
//console.log(allHeros)
// output => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread operator 
const allNewHeros = [...marvelHeros , ...dcHeros]
// console.log(allNewHeros)
//output => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//summary till now => do aaray ko ek array mein bnane k liye conacat or spread accha operator hai { sabse accha spread operator hai }


const anotherArray = [1, 2, 3, [4, 5, 6] , 7, [6, 7, [4, 5]]]
//console.log(anotherArray)
const allInOneArray = anotherArray.flat(Infinity) // flat jo hai sbhi array ko ek saath kr dega. flat(iske andr hum log likhte hai ki main aaray k andr kita array hai (depth) )
//console.log(allInOneArray);

// console.log(Array.isArray("Bharat")) // output :- this is not aaray so it gives false 
// console.log(Array.isArray(anotherArray)) // they check this array or not and it gives true
//console.log(Array.from("Bharat")) // bracket k andr jo v hoga usko array bnadega

//intresting case
//console.log(Array.from({name : "bharat"})) // output mein => []


let Score1 = 100
let Score2 = 200
let Score3 = 300

// console.log(Array.of(Score1, Score2, Score3 ));
// console.log(Array.isArray(Score1, Score2, Score3 ));
// console.log(Array.from("100,200100,300"));

