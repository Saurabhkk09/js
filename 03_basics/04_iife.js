// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//jb do IIFE likhte h toh ; semi colon lgana nii bhulna hh ...
//global scope ke pollution se problem hoti h kehi baar that's why we use the iife to remove the global scope pollution ot variable

//SIMPLE IIFE
( () => {
    console.log(`DB CONNECTED TWO`);
} )()

