class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {

    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log((`A new course is added by ${this.username}`));
    }

}

let Piyush = new Teacher("Piyush" , "Piyush@gmail.com" , "1234567")

Piyush.addCourse();
Piyush.logMe();

let Umm = new User("Ypurs")
Umm.logMe();
// Umm.addCourse(); this is going to show error cause it does not have the access of teacher class cause it is not defined by teacher : new Teacher

console.log(Piyush instanceof User);