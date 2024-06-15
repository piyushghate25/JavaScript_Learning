const { log } = require('console');

class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
}
const Piyush = new User("Piyush" , "Piyuhs@gmail.com" ,"Piyush12@");

console.log(Piyush.encryptPassword());


