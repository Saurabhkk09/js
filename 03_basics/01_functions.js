

function sayMyname(){
console.log("S");
console.log("A");
console.log("U");
console.log("R");

}
//sayMyname()

//function addTwonumbers(number1, number2){
 //  console.log (number1 + number2);

//}
function addTwonumbers(number1, number2){
    //let result = number1 + number2
    //return result
    //return statement ke baad kuch bhi print nii hota hh ....so upper ke likhe hue sb print ho jayenge 
    return number1 + number2
}
const result = addTwonumbers(3 , 4)

//console.log("Result: ", result);
//function ki jo defination bnate hh usko parameters kehte hh

//aur jb function ko call krate hh wo kehte hh arguments..

function loginUsermessage(username){
    if(username === undefined){
        //console.log("Please enter a username");
        return 
    }
    return '${username} just logged in'
}

//console.log(loginUsermessage("saurabh"))
//console.log(loginUsermessage())
//jb values me kuch pass nii krte hh toh unefined aata hh .....
//Exclamatory(!) symbol converts the true value into false value and false value into true value...



function calculateCarPrice(...num1){
    return num1
}

//console.log(calculateCarPrice(200, 400, 500))

//... (three dots) is shows the spread opeartor and rest operator ...dono ko ekk hi kehte hh 
//but their uses are different 

const user ={
    username: "saurabh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username: "saur",
    price: 399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
//console.log(function name(variable name))