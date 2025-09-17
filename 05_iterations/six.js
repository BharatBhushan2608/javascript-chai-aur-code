// const coding = ["js" , "cpp" , "python" ," java " , "ruby" ]

// humlog aise value ko store kr k return nhi kr skte h

// const value = coding.forEach((item) => {
//     //console.log(item);
//     return item // return nhi krega ye
// })
// console.log(value)


const myNums = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter((nums) => (nums > 4) ) // FILTER WORKS WHEN CONDITION IS TRUE
// console.log(newNums) 

const newNums = myNums.filter((nums) =>  { // yha parenthesis k jgh scope use kiye h toh humko return krna pdega
     return nums > 4
} )
//console.log(newNums)

// same chiz print krna hai using for each loop

const nuwNums = []

myNums.forEach( (nums) => {
    if (nums > 4) {
        nuwNums.push(nums)
    }
})
//console.log(nuwNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // wo book ko access kro jiska genre history ho
  const userbooks = books.filter( (bk) => bk.genre === 'History')
  //console.log(userbooks);
  
  // wo book ko access kro jo 1995 k baad publish hua ho

  let seePublish = books.filter((bk) => { return bk.publish > 1995  })
  //console.log(seePublish);

  seePublish = books.filter((bk) => ( bk.publish > 1995  && bk.genre === 'History'  ))
  console.log(seePublish);
  


  


