// table from 1 to 10 

// for (let i = 1; i <= 10; i++) {

//     console.log(`Table of ${i}`);
//     for(let j = 1; j<= 10 ; j++ ){

//         console.log(i + "*" + j + ' = ' + i*j );
//     }
// }


// Break 

// for ( let i = 1 ; i<=10 ; i++){
//     if(i == 5){
//         console.log("5 is best number ");
//         break
//     }
//     console.log(`${i}`);
// }


// continue

for ( let i = 1 ; i<=30 ; i++){
    if(i % 5 == 0 ){
        console.log(`multiple of 5 is detected : ${i} `);
        continue
    }
    console.log(`${i}`);
}
