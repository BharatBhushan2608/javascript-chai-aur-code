// for each loop

const coding = ["js" , "cpp" , "python" ," java " , "ruby" ]

// coding.forEach( function  (item) {
//     console.log(item);

// })

// foreach in arrow function 

coding.forEach( (item)  => {
    // console.log(item)
})

// more intresting

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( (printMe))

coding.forEach((item , index, arr) => {
    //console.log(item , index , arr);
    
})

// array k andr bht sara object

const mycoding =  [
    {
        languageNmae: "c++",
        languageFileName:"cpp"
    },

    {
        languageNmae: "java",
        languageFileName:"java"
    },

    {
        languageNmae: "js",
        languageFileName:"javascript"
    }
]

mycoding.forEach( (item) => {
    console.log(item)
    console.log(item.languageNmae)

})