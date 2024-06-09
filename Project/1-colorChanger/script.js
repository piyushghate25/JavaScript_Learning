const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// Method 1
// buttons.forEach(function(button){
//     button.addEventListener('click' , function(e){
//         if(e.target.id !== body.style.backgroundColor){
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })

// Method 2

buttons.forEach( function ( button ) {
     button.addEventListener('click' , function(e) {

        if( e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id ;
        }
        if( e.target.id === 'white') {
            body.style.backgroundColor = e.target.id ;
        }
        if( e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id ;
        }
        if( e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id ;
        }
     } );
});