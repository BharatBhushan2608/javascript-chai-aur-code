//how to declear object throgh singleton or contructor

const tinder = new Object() // singleton
const tinderUser = {}    // object literals

// both are empty object - there are two way to create object 
// console.log(tinder);
// console.log(tinderUser);

tinderUser.id = " 123-Bharat"
tinderUser.name = " Bhsuhan-Bharat"
tinderUser.isLogggedIn = " false "

// console.log(tinderUser);

tinder.id = " 123-Bharat"
tinder.name = " Bhsuhan-Bharat"
tinder.isLogggedIn = "false"

// console.log(tinder);

// object k andr object 

const regularUser = {
    email : " bharatbhushan@gmail.com" ,
    fullname : {
        userFullName : {
            firtsname : "bharat",
            lastname : "bhushan"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firtsname);

const obj1 = {1: "a" , 2: "b" , 3: "c"}
const obj2 = {4: "d" , 5: "e" , 6: "f"}

const  allInOneObject = ( obj1, obj2 )
// console.log(allInOneObject);

// Object.assign object ko jorta hai
const allInOneObject_1 = Object.assign({} , obj1 , obj2) // {} iska mtlb h target source mtlb ki obj1 or obj2 dono iske andr aayega
// console.log(allInOneObject_1);

// spread operator v jorta hai dono object ko
const allInOneObject_2 = {...obj1 , ...obj2 }
// console.log(allInOneObject_2);

// aap tb use krenge jb database se data aayega

const users = [
    {
        id : 1, 
        email : " bharat@gmail.com"
    },

    {
        id : 1, 
        email : " bharat@gmail.com"
    },

    {
        id : 1, 
        email : " bharat@gmail.com"
    },

    {
        id : 1, 
        email : " bharat@gmail.com"
    },
]
users[1].email

// console.log(tinderUser);

// ye jo output dega wo array k andr dega 
// very usefull 
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// how to check this properties are available or not in object
// console.log(tinderUser.hasOwnProperty('isLogggedIn'));
// console.log(tinderUser.hasOwnProperty('isLoggged'));
// console.log(tinderUser.isPrototypeOf('isLogggedIn'));



// DE-STRCTURE OF OBJECT 

const course = {
    courseNmae: "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// three way to access any key with value

console.log(course.courseInstructor)

const{courseInstructor} = course
console.log(courseInstructor);

const{courseInstructor : instructor} = course // yha pe courseinstrutor ka naam chng kr diye hai or wo naam instructor kr diye h 
console.log(instructor);

// about json format api how its look 
// u have to send api in the format of json

//1st way

// {
//     "name" : "bharat"
//     "course" : "btech-cse"
//     "year" : "fourth "
// }

//2nd way
[
    {},
    {},
    {}
]


