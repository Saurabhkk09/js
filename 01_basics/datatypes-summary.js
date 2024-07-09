//Their are two types of datatypes:-
//1.Primitive 
// 7 types are:- string,number,boolean,null,undefined,symbol,Bigint

const score = 100
const scorevalue = 100.3
const ousidetemp = null
let useremail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);




//2.Non-Primitive(reference type)
//array, objects, functions


const heros = ["shaktiman" ,ironman];
let myobj = {
    name: "saurabh",
    age :22,

}


const myfunction =function(){
    console.log("hello world");

}

console.log(typeof bigNumber); //output is undefined
//typeof kiska ka ky aata h :-
// undefined - undefined
//null - object
//boolean - boolean
//number - number
//function - function object





// +++++++++++++++++++++++++++++++++++++++++++++++


// stack memory(primitive) , Heap memory(non-primitive)

let myname = "saurabh"
 let anothername = myname
 anothername = "kumar"

 console.log(mynamme);   //output is saurabh
 console.log(anothername); //output is kumar
 //it will all goes to the stack memory



 let user ={
    email : "user@google.com",
    upi: "iser@ybl"
 }  
 ///it will all goes to the heap memory

 let userTwo = userOne;
 userTwo.email = "saurabhk09@google.com"

 console.log(userOne.email); // saurabhk09@google.com
 console.log(userOne.email); // saurabhk09@google.com
 
 //the email id is changed into both the places