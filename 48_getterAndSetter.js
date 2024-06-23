class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Piyush`
    }

    set password(value){
        this._password = value
    }
}

const Piyush = new User("piyush@gmail.com", "Piyush")
console.log(Piyush.email);

//

const User2 = {
    _email: 'you@.com',
    _password: "sdfbs",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User2)
console.log(tea.email);

//

function User3(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const name = new User("ghate@.com", "ghate")

console.log(name.email);