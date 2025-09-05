const accountId = 2343;
let accountEmail = "bharat@gmail.com"
var accountPassword  = "12345"
accountCity = "Delhi" //aise aap likh skte hai bt ye tarika accha nhi hai 
let accountState;

//accountId = 2  // you cant change const variable

accountEmail = " bhushan@gmailcom"
accountPassword = "98765"
accountCity = "greater noida"


/*
prefer not use var
because of issue in block scope and functional scope

*/

console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity, accountState])
