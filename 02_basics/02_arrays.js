const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

//in concate we have to make storage value to store new concate array..

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

//that's spread method alternate option for concate method....

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
 */   

  console.log(Array.isArray("Saurabh"))
  console.log(Array.from("Saurabh"))
  console.log(Array.from{name: "saurabh"})) //interesting case 
  // o/p willl be [] 

/*
false
[
  'S', 'a', 'u',
  'r', 'a', 'b',
  'h'
]
  */
