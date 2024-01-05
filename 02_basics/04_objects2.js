//singleton

const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

console.log((tinderUser));

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Tanmay",
            lastName: "Pal"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName?.userFullName.firstName); //if fullName exist then

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2} //spread 
console.log(obj5);

const users = [
    {
        id: 1,
        email: "shd"
    },
    {
        id: 2,
        email: "scnvhd"
    },
    {
        id: 3,
        email: "shsakmd"
    },
    {
        id: 4,
        email: "shskd"
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js",
    price: "100",
    instructor: "tanmay"
}

// course.instructor 

const {courseName: name} = course //object destructuring

console.log(name);

const navbar = ({company}) => {

}

navbar(company = "tanmay")