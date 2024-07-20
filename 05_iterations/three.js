// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}

const greetings = "helloworld"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
    
}

//Maps

const map = new Map()
map.set('IN', "india")
map.set('USA',"united states of America")
map.set('fr', "france")

//console.log(map);

/*
Map(3) {
    'IN' => 'india',
    'USA' => 'united states of America',
    'fr' => 'france'
  }
MAP is known for uniqueness and execution will be in same order..

    */

for (const [key , value] of map) {
    console.log(key, ':-', value);
    
}

/*
IN :- india
USA :- united states of America
fr :- france
*/


//in object for of loop is not iteratable 

