const myNums = [1,2,3,4]

// const total = myNums.reduce( function ( acc , currValue) {
//     return acc + currValue 
// },0)

// console.log(total);


const total = myNums.reduce ( (acc , currValue) => acc + currValue , 0 )

console.log(total)



const shoppingCart = [
    {
        itemName: "js course",
        price: 22999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 15999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBillToPay = shoppingCart.reduce( ( acc , item ) => acc + item.price , 0)

console.log(totalBillToPay);