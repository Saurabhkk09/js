//if 
const temp = 41
if(temp < 50){
    console.log("less than 50");

}else
console.log("more than 50");

//<, > , <=, >=, ==, !=, ===, !==

/*
const score = 200
if(score > 100){
let power ="fly"
console.log(`user power: ${power}`);
}
console.log(`user power: ${power}`);
*/

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if(userLoggedIn && debitcard && 2==3){
    console.log("allow to but course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");

}