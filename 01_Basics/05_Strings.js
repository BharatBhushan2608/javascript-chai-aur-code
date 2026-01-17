const name = "hitesh"
const repoCount = 50

// for this generatio this is too old style 
// console.log(name + " repocount"  + " value " +  repoCount )

// console.log(`The value of ${name} repocount is ${repoCount}`); // good apporach

//another way to define string
const gameName = new String('Bharat-Bhushan')

//accessing index of string
// console.log(gameName[0])

//accessing the prorotype
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // character at 2 (counting start from 0 ...)
// console.log(gameName.indexOf('h'));

//  const newString = gameName.substring(0,4) //  it give upto 3 index not include 4
//  console.log(newString);

 const anotherString = gameName.slice(-10, 4)
 //console.log(anotherString);

 const newStringOne = "     bharat     "
//  console.log( newStringOne);
//  console.log( newStringOne.trim()); // trim remove the space and there is also trimstart and trimend


const url = "http://bharat.com/bharat%20bhushan"// if u want replace something from the url u can replace with using replace
// console.log(url.replace('%20', '-'));


// console.log(url.includes('bharat'))
// console.log(url.includes('sososo'))


const ggName = "bharat-bhushan-bhussi-golu" // it convert into array
// console.log(ggName.split('-')); // we split on the basis of - (dash) , u can split one the basis of anything like space




//******  IMPORTANT NOTE => GO THROUGH THE MDN AND SEE MORE INTRESTING ABOUT STRING



