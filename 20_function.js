// rest operator

function caluculateMark(...marks){
    return marks;
}

console.log(caluculateMark( 56 , 66 , 88 , 77));


const user = {
    username : " Piyush",
    id : 37
}

function giveInfo(inforamtion){
    console.log(`username is ${inforamtion.username} and id is ${inforamtion.id}`)
}

// giveInfo(user);

giveInfo({
    username : "max",
    id : 69
})


// Array 

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue([10,20,44]));
