let a =300 //global scope

if(true){
    let a = 10
const b = 20
console.log("INNER:", a); //local scope


}
console.log(a);
//console.log(a);
//console.log(b);
//console.log(c);

//jitni baar curly braces {} aayega utne times scope aayega