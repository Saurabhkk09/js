const user ={
    username : "saurabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);

    }

}
///this refers to the current context....

//user.welcomeMessage()
//welcomeMessage hamara ek method hh ....
//user.username ="sam"
//user.welcomeMessage()
//saurabh,welcome to website
//sam,welcome to website

//console.log(this);
//{}

/*
function chai(){
    let username ="saurabh"
    console.log(this.username);
}

chai()
*/

/*
const chai = function(){
    let username ="saurabh"
    console.log(this.username);


}
chai()
*/

//undefined is the output...

/*
const chai = () =>{
    let username ="saurabh"
    console.log(this);


}
chai()
//Arrow function me function name hata ke bus arrow jesa symbol bnana hh ..
*/


//const addTwo = (num1 , num2) =>  num1 + num2


//console.log(addTwo(3,4))

//if we use curly braces then we have write return and if we are using the the brackets then we have not need to show the return ....we can directly write like(num1 + num2)

const addTwo = (num1 , num2) => ({username: "saurabh"})
console.log(addTwo(3,4))
//in object we have to write into the round brackets ()



