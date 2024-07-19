let a =300 //global scope

if(true){
    let a = 10
const b = 20
//console.log("INNER:", a); //local scope


}
//console.log(a);
//console.log(a);
//console.log(b);
//console.log(c);

//jitni baar curly braces {} aayega utne times scope aayega


function one(){
    const username = "saurabh"

    function two (){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}

one()
//under ke functions ko bhaar wala access kr pata hh...

if(true){
    const username ="saurabh"
    if(username === "saurabh"){
        const website ="youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++interesting ++++++++++++++++++


function addone(num){
    return num + 1
}
console.log(addone(5))


const addTwo = function (num){
    return num + 2
}
console.log(addTwo(5))