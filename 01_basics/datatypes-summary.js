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


const heros = ["shaktiman" ,iron man];
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