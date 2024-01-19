const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){ // we are decalyring getter and setter in object based js
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) //we are creating new context of User
console.log(tea.email);