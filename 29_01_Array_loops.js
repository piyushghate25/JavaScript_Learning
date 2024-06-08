// for of

// const arr = [1,2,3,4,5,6,7,8,9,10]

// for (const num of arr) {
//     console.log(num);
// }


//
// const myName = "Piyush"
// for (const alphabets of myName) {
//     console.log(`alphabets in my name is ${alphabets}`);
// }


//Maps maps are not iterable

// const map = new Map()
// map.set('In' , "India")
// map.set('Fr' , "France")
// map.set('Rus' , "Russia")

// for (const [key, value] of map) {
//     console.log(key , '=>' , value);
// }

//object pe for of loop nahi lagata


// for in loop

const myobj = {
    js : "Javascript",
    py : "python",
    rb : "Ruby"
}

// for (const key in myobj) {   // only gives us key not the key:value pair
//     console.log(key);
// }

for (const key in myobj) {
    console.log( `${key} is shortcut for ${myobj[key]}`);  // myobj[key]  Bracket notation: Accesses the property value using the value stored in key
}


const names = [ "Piyush" , "Papau" , "Papya", "Pani"]

// for (const name in names) {
//     console.log(name);
// }

// for (const name in names) {
//   console.log(`${names[name]}`);
// }




