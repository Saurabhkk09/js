//falsy value

//false , 0, -0, BigInt , "", null, undefibed ,NaN,  0n

//truthy value
// "0" , 'false', " ", [] , {}, function(){}



//Nullish coalescing operator (??): null undefined


let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


//Terniary operator
condition ? true : false
iceteaprice  <= 80 ? console.log("less than 80") : console.log("more than 80")