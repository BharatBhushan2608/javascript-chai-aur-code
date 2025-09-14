// for in loop

// for in loop  for object 
const MyObject = {
    js : "javascrpit",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const objjj in MyObject) {
    //console.log(objjj)  // ise bs key print hoga

}

for (const objjj in MyObject) {
     //console.log(MyObject[objjj]) // is se bs value print hoga

}

for (const objjj in MyObject) {
    //  console.log(`key is: ${objjj} , value is: ${MyObject[objjj]}`) // is se key value print hoga

}

// for in loop for arrays

const progg = ["js" , "rb" , "py" , "java" , "cpp"]

for (const arrayval in progg) {
    //console.log(arrayval)  // forof loop mein jb hum print krenge toh array ka value dega bt for in loop mein array ka index print hoga
}

// agr array ka value chahiye toh aise likho

for (const arrayval in progg) {
    //console.log(progg[arrayval])
}

// for in loop for map 

// const map = new Map
// map.set('IN' , "india" )
// map.set('USA' , "United States Of America" )
// map.set('Fr' , "France" )
// map.set('IN' , "india" ) // ye print nhi hoga kui ki duplicate hai ye 
// console.log(map)
 
// for (const key in map) {
//     console.log(key)
// }


