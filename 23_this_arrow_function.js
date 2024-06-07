// This

const user = {

    username : "Piyush",
    id : 37,

    welcomeMessage  : function(){

        console.log(`${this.username} , welcome to website`);
    } 
}

user.welcomeMessage()

user.username = "Luffy"

user.welcomeMessage()

console.log(this);


//
console.log("<----------------------------------------------------------------->");
//


function piyush(){
    console.log(this);
}

piyush()


//
console.log("<----------------------------------------------------------------->");
//

const Store = ( ) => {
    console.log("Welcome to home");
}

const add = ( num1 , num2 ) =>{

    return num1 + num2 ; // if we use curly braces{} then we need to write retun 

}

// const addTwo = ( num1 , num2 ) => (num1 + num2)

const addTwo = ( num1 , num2 ) => ({ username:"piyush"}) // to returm objet it must wrap in curly braces