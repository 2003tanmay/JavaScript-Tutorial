class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    // set email(value){        // it give error b/c setter is also seting value and constructor is also setting value so stack overflow case is happend
    //     this.email = value
    // } 

    set email(value){  // we are seting _email which is goes in email the name of setter function
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);