//singleton

//object literals
//Object.create isse bhi objects create kr skte hhh 
const JsUser = {
name : "saurabh",
"full name": "saurabh kumar",
age : 18,
location: "delhi",
email: "saurabhkk@gmail.com",
isLoggedIn : false,
lastLohinDays : ["monday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])



JsUser.email = "saurabh@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "saurabh@google.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello"); //Hello
}
console.log(JsUser.greeting()); //undefined





