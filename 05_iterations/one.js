// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if ( element == 5) {
//         console.log("5 is best number")
//     }
//     console.log(element);
    
// }

for (let i = 0; i <= 10 ; i++) {
     //console.log(`Outerloop value ${i}`);
    for (let x = 0; x <= 10 ; x++) {
        //console.log(`Innerloop Value ${x} and outer loop ${i}`)
        //console.log(i + '*' + x + '=' + i*x); // table 0 to 10
    } 
}

let myArr = ['flash' , "superman" , "batman" ]
//console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element)
    
}

// break and continue

// for (let index = 1; index < 20; index++) {

//     if (index == 5) {
//         console.log("Detected 5")
//         break
//     }
//      console.log(`value of index is: ${index}`)
    
// }

for (let index = 1; index < 20; index++) {

    if (index == 5) {
        console.log("Detected 5")
        continue // jb 5 detect hua toh ek baar niche wala console log ko print nhi krega agle baar se phir krega (mtlb 6 se krega)
        // 
    }
     console.log(`value of index is: ${index}`)
}

