class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // by declarying this metod as static is not the part of the instance of this class but it a part of the User class directly.
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) //if there is no static keyword in createId we can access createId.

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // it give error