// promise created 
// 1st promise
const promiseOne = new Promise(function  ( resolve , reject) {
    // Do any Async task 
    // DB calls , network request , cryptography
    
    setTimeout( function () {
        console.log('Async Task Is Completed')
        resolve() // when u write resolve after that it coneccted with then and give the output of promise consumed
    },1000)
})   

promiseOne.then(function  () {
    console.log('Promised Consumed')
})

// same thing done by another type 
// Second promise

new Promise(function  ( resolve , reject) {
    setTimeout(function  ( ) {
        console.log('Async task 2')
        resolve()
    },1000)

}).then(function  ( ) {
    console.log('Asnc 2 resolved')
})

// promise three
// koi data network se aaya ho usko kaise connect krenge then se or kaise acces krenge


const promiseThree = new Promise(function  (resolve , reject ) {
    
    setTimeout(function () {
        console.log('ASYNC Task 3')
        resolve({username: 'Bharat' , email: 'bhushan26@gmail.com'})
        
    } ,1000)
})

promiseThree.then(function (user) {
    console.log(user)
    console.log('Async 3 Done')
})


// PROMISE FOUR

const promiseFour = new Promise(function  (resolve , reject) {

    setTimeout(function  () {
        let error = false
        if (!error) {
            resolve({username: 'Bharat' , Password: 'b321'})
        }else{
            reject('ERROR: Something went wrong')
        }
        
    },2000)
    
})

promiseFour.then( (user) => {
    console.log(user)
    return user.username

}).then( (username) => {
    console.log(username)

}).catch(function (error) {
    console.log(error)

}).finally( () => console.log('The Promise is either resolved or rejected')) // task hoga ya nhi hoga dono samay ye print hoga 


//PROMISE FIVE

const promiseFive = new Promise (function(resolve , reject) {
    
    setTimeout(function  () {
        
        let error = false
        if (!error) {
            resolve({username: 'javaScript' , mobileNo: '9123'})
        }else{
            reject('Promise FIve Error: Something went wrong')
        }
    }, 3000)
})

async function  consumePromiseFive() {
    try{
        const response =  await promiseFive
            console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()


//  https://jsonplaceholder.typicode.com/users   iska sara data print krna hai


// async function  getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ' , error)
//     }
// }
// getAllUser()

// Same data print krna hai using then().catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch((error) => console.log(error))