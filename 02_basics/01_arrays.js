// array
//The array object, as with arrays in other programming languages,enables storing a collection of multiple items under a single variable name, and has numbers for performing common arrays operations.

//arrays are not associative
//javascript array-copy-operations create shallow copies.

//shallow copy -> a shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made .
//basically , jo reference me change krenge wo original me bhi change hoga....


//Deep copy -> a deep copy is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//basically ,  jo reference me change krenge wo original me change nii hoga....


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "hulk"]

//const myArr2 = new Array(1,2,3,4)
//jb new array bnega tb () round brackets use krne hh ...
//console.log(myArr[1]);


// Array methods 

//myArr.push(6) // it will add the element into the array
//myArr.pop(6)  // it will delete the element into the array

//myArr.unshift(0);  // 0 , 0 , 1 , 2 , 3.....
//myArr.shift()

//console.log(myArr.includes(9));  //false
//console.log(myArr.indexOf(3));   //4

//const newArr = myArr.join()
//console.log(myArr);
//console.log(typeof newArr);  //string

//slice , splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);   //[1,2]
console.log("B" , myArr);  // [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);
console.log(myn2);


//splice manipulate the original arrays where slice do not ......
//splice includes the range last element like (1,3) ----> 1,2,3 and vice versa


