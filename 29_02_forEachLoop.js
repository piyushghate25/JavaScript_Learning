// for each loops

const onePiece = [ "Luffy" , "Zoro" , "Nami" , "Robin" , "Sanji" , "Chopper"]

// onePiece.forEach( function (name)  {
//     console.log(name);
// })

// onePiece.forEach( (name) => console.log(name));

// function printName(name){
//     console.log(name);
// }
// onePiece.forEach(printName)


// onePiece.forEach( ( name , index , arr) => {
//     console.log(name , index , arr);
// })

const myCoding = [

    {
        languageName : "Javascript",
        languagFileName: "js"
    },
    {
        languageName : "Python",
        languagFileName: "py"
    },
    {
        languageName : "C",
        languagFileName: "cpp"
    }
]


myCoding.forEach( (item) => {
    console.log(item);
})


myCoding.forEach( (item) => {
    console.log(item.languageName);
})
