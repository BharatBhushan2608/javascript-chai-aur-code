// let a = 10
// const b = 20
// var c = 30

{} // scopes


if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("inner:", a);
    

}

//console.log(a);
// console.log(b);
//console.log(c);


// closure ye hota hai ki chlid function parent function k varaible ko access kr skta hai  
function one(){
    const username = "bharat"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website); // ye access nhi hoga 

    two()

}
// one()


if(true){
    const username = "bharat"

    if(username === "bharat"){
        const website = " youtube "
        //console.log(username + website);
    }
   // console.log(website); // yev access nhi hoga
    
}
//console.log(username); // ye v access nhi hoga


// +++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++

//  technique to create function 

addOne(5) // jb funtion aise define hoga toh usko hum uske upr b acces kr skte h 
function addOne(num){
    return num + 1
}


// bt isme humisko upr access nhi kr skte hai kyu is function ko hum varaible k abdr daal diye hai 
const addTwo = function(num){
    return num + 2

}
addTwo(5)



