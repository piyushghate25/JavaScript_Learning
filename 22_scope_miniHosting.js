function one(){
    const username = "piyush"

    function two(){
        const surname = "Ghate"
        console.log(username);
    }

    // console.log(surname); gives error
    two()
}
one()

console.log("<---------------------------------------------------------->");

// 

if(true){
    const firstName = "Piyush"

    if(firstName === "Piyush"){

        const lastName = " Ghate"
        console.log(firstName + lastName );
    }
}

console.log("<---------------------------------------------------------->");

//

console.log(addOne(5));

function addOne(num){

    return num + 1 ;

}


// console.log(addTwo(5)); 
// gives error because of wrong hositing method 
// if you store the function into a varible and call it before 
// this gives you error 
const addTwo = function addTwo(num){

    return num + 2 ;

}
