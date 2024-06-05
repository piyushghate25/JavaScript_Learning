function sayMyname(){
    console.log("piyush");
}
sayMyname()


function multTwoNumbers(num1 , num2 ){  // parameters 
    console.log(num1 + num2);
}

multTwoNumbers(10 , 20); // arguments



// return 

function thankYouMsg( username ){
    if(!username){
        console.log("Please enter your name")
        return
    }else{
        return `${username} Thank You for your help!`
    }
}

console.log(thankYouMsg());