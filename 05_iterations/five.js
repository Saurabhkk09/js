const coding =["js", "ruby", "java", "python","cpp"]
/*
coding.forEach(   function (item){
    console.log(item);

} )
    */

/*
coding.forEach( (item) => {
    console.log(item);
}
    */

coding.forEach ( (item,index, arr) => {
    console.log(item, index, arr);
})
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const mycoding =[{
    languageName: "javascript",
    filename: "js"
},
{
 languageName: "python",
    filename: "py"
},
{
     languageName: "c++",
    filename: "cpp"
}
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})

/*
javascript
python
c++
*/