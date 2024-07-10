//dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

//Wed Jul 10 2024 06:54:22 GMT+0000 (Coordinated Universal Time)
//Wed Jul 10 2024
//7/10/2024, 6:54:22 AM

console.log(typeof myDate);
//object

//let myCreateDate = new Date(2023, 0 ,23)
//console.log(myCreateDate.toDateString());
//Mon jan 23 2023

let myCreateDate = new Date("2024-07-10")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(myCreateDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  //6
console.log(newDate.getDay());    //3

// '${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})