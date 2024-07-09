//strings are denoted with both '' and "" in javascript 
//string is an object

const name = "saurabh"
const repocount = 50

//console.log(name + repocount + "value");
//this method of writing is outdated, we prefer new method to write string in javascript

console.log('hello my name is $ {name} and my repo count is $ {repocount}');


const gameName = new String('saurabh')
//declaring new string

//console.log(getName[0]);
//console.log(getName.__proto__);


//console.log(getName.length);
//console.log(getName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString); 
// saur


const anotherString = gameName.slice(-6, 4)
console.log(anotherString);
//aur

const newStringOne = "  saurabh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://saurabh.com/saurabh%10kumar"
console.log(url.replace('%10', '-')); //saurabh-kumar

console.log(url.includes('saurabh')); //false

console.log(gameName.split('-'));



