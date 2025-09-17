// reduce function

const myNums = [1, 2, 3]

// const mytotal =myNums.reduce( function (acc, currval)  {
//     console.log(`acc value: ${acc} , currval: ${currval}`)
//     return acc + currval
// }, 0) // intially we declear acc value to 0

const mytotal = myNums.reduce((acc, currval) => (acc + currval))
//console.log(mytotal)

const shoppingCart = [

    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 2999
    },

    {
        itemName: "ai course",
        price: 9999
    },

]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0 )
console.log (priceToPay)