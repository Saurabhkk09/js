//const tinderUser =  new object() //Singleton object
/*const tinderUser = {} //Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "saurabh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saurabh",
            lastname: "kumar"
        }
    }
}
//console.log(regularUser.fullname);
//{ userfullname: { firstname: 'saurabh', lastname: 'kumar' } }

//console.log(regularUser.fullname.userfullname.firstname);
//saurabh

const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}


//const obj3 = {obj1 ,obj2}
//console.log(obj3);

//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3 = object.assign({}, obj1 ,obj2)
//console.log(obj3);
//we can also use spread method here 


const users = [
    {
        id: 1,
        email: "saurabh@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

//console.log(object.keys(tinderUser));
//output will shown as an array
//[.............]
//console.log(object.values(tinderUser));
//console.log(object.entries(tinderUser));


////////////Restructuring the objects//////////////
*/
const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

/*const navbar = ({company}) => {


}

navbar(comapny = "hitesh")

{
    name: "saurabh",
    coursename: "js in hindi",
    price: "free"
}
    */

[
    {},
    {},
    {}
]
