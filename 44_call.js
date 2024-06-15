function setUserName(username){
    this.username =username
    // console.log("This is executed");
}

function createUser(username , email , password){
    setUserName.call(this , username)

    this.email =email
    this.password = password
}
const piyush = new createUser("Piyush" , "piyush@gmail.com" , "12344")

console.log(piyush);