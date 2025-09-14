
// these are array specific loop

// for of loop
// syntax 
// for (const element of object) {
    
// }
//element ki jgh varaible ka naam
//object => mtlb kiske upr loop lgana hai

const arr = [1,2,3,4,5] 

for (const num of arr) {
    console.log(num);  // forof loop mein jb hum print krenge toh array ka value dega bt forin loop mein array ka index print hoga
    
}

const forofForString = " Hi Bharat Bhushan "
for (const num of forofForString) {
    // console.log(num)
}

// Maps => iske andr koi v duplicate value nhi hoti , all value are unique
// it insertion oreder of keys
const map = new Map
map.set('IN' , "india" )
map.set('USA' , "United States Of America" )
map.set('Fr' , "France" )
map.set('IN' , "india" ) // ye print nhi hoga kui ki duplicate hai ye 
console.log(map)

// for of loop on map
for (const key of map) { // aise me pura map print hoga
    // console.log(key)   
}

//  aise mein bs key or value print kr skte hai (key or value)

for (const [key , value] of map) {
    // console.log(key , ':-' , value)
}

// for of loop on object

const myObject = {
    IN : "india",
    USA : "United States Of America",
    Fr : "France"
}

// this is not working , aage hum dekhenge
// for (const  [key , value] of  myObject) {
//     console.log(key,value);
    
// }
 
