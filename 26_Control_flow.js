const isUserloogedIn = true

if(isUserloogedIn){
    console.log("user is logged");
}else{
    console.log("user is not logged");
}

//

// && and || 

const user = true;
const debitcard = true;

if( user && debitcard){
    console.log("Have the permission to buy the course");
}else{
    console.log("Deny the permission to buy the course");
}


const loggedFromGoogle = true 
const loggedFromEmail  = true

if( loggedFromEmail || loggedFromGoogle){
    console.log("logged");
}else{
    console.log("Not logged");
}

// switch

const month = "Mar"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "Feb":
        console.log("february");
        break;
    case "Mar":
        console.log("March");
        break;
    case "April":
        console.log("Aprilf");
        break;

    default:
        break;
}

// Truthy and falsly value

//falsy value
// false , 0 , -0 ,BgInt  0n , "" , null , NaN , undefined

//Truthy value
// "0" , " " , 'false' , [] , {} , function(){}

const userEmail = "Piyushghate@gmail.com"
 
if(userEmail){
    console.log("Email obtained");
}else{
    console.log("Email not obtained");
}

//

// Nullish Coalescing Operator ( ?? ) : null undefined

let val = 5 ?? 10 
let val1 = null ?? 15
let val2 = undefined ?? 20
let val3 = null ?? 25 ?? 30

console.log(val); 
console.log(val1);
console.log(val2);

//

// Terniary operator

// condition ? true : false

const money = 1000

// if(money > 500) console.log("You have enough money");

money > 500  ? console.log("you have enough money ") : console.log("you do not have enough money");

