 const promiseOne = new Promise(function ( resolve , reject ){
    setTimeout(function(){
        console.log(`Async task is complete`);
        resolve()
    },1000)
 })

 promiseOne.then(function(){
    console.log(`Promise consumed`);
 })


 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
 })


 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Piyuhs" , email : "Piyush@gmail.com"})
    },1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })


 const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true ; // false
         if(!error){
            resolve({username : "piyus" , pass : "1245"})
        }else{
            reject(`ERROR : Something went wrong`)
        }
    },1000)
 })

promiseFour.then((user) => {
    console.log(user);
    return user.username;
 })
 .then((username)=>{
    console.log(username);
 })
 .catch(function(error){
    console.log(error);
 })
 .finally(()=> console.log("the promise either resolved or rejected"))



 promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({ username  : "javascript" , key : "1234"})
        }else{
            reject(`ERROR : JS went wrong`)
        }
    }, 1000);
 })


 async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(Response);
    } catch (error) {
        console.log(error);
    }
 }

 consumePromiseFive()


 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => {
    return response.json()
 })
 .then((date) =>{
    console.log(data);
 })
 .catch((error) => console.log(error))



