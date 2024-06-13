const user = {
    username : "Piyush",
    id : 37 ,
    college : "COETA",

    getUserCollege : function(){
        console.log(`${this.username} college name is ${this.college}`);
    }
}
console.log(user.getUserCollege());


function name(firstName , middleName , lastName){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;

    this.greeting = function(){
        console.log((`Welcome ${this.firstName} ${this.middleName} ${this.lastName}`));
    }

    return this
}

const name1 = new name("Piyuhs" , "Nana" , "Ghate");
const name2 = new name("Vihan" , "Umesh" , "Ghate");

console.log(name1);
console.log(name2);

console.log(name1.constructor);