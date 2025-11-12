// async function  getAllUser() {
    
//      try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
        
//      } catch (error) {
//         console.log(error)
//      }
// }
// getAllUser()




fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) => { 
    console.log(error)
})



// without converting data in json format 

fetch("https://jsonplaceholder.typicode.com/users")
.then( (response) => {
    console.log(response)
    // return response.json()
})
// .then( (data) => {
//     console.log(data)
// })
.catch( (error) => { 
    console.log(error)
})

// without converting in json format u not able to read proparly

