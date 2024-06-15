class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USername : ${this.username}`);
    }

    static createId(){
        return `1234`
    }
}

const piyush = new User("Piyush")
console.log((piyush.createId));


class Teacher extends User {
     constructor(username , email){
        super(username);
        this.email = email;
     }
}

const vedant = new Teacher("Vedant" , "vedant@gmail.com")

vedant.logMe();