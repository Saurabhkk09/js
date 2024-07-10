const score = 400
console.log(score); // 400


const balance = new Number (100)
console.log(balance);  //[Number :100]

console.log(balance.toString().length); 
//3

//now the datatype is changed into the string,
//which provides various properties 

console.log(balance.toFixed(2));
//100.00 it shows the precision value

const otherNumber = 23.8555
console.log(otherNumber.toPrecision(3));
//23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString());
//1,000,000

//////////////+++++++++++++ MATHS ++++++++++++++++///////////////////

console.log(math);
console.log(maths.abs(4));
//4
console.log(math.round(4.6)); //5
console.log(math.ceil(4.2));  //5
console.log(math.floor(4.9)); //4
console.log(math.min(4,3,6,8));
console.log(math.max(4,3,6,8));
console.log(math.random());
//it lies between the 0 and 1

console.log(math.random()*10 + 1);
 //7.6111193

const min = 10
const max = 20

console.log(math.floor(math.random() * (max - min + 1)) + min)