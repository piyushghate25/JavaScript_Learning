// generate a random number

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'

    for( let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let id ;

let start = function(){

    id = setInterval(changeColor,100);
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    };
};

let stop = function(){
    clearInterval(id);
}

document.querySelector('#start').addEventListener('click',start)

document.querySelector('#stop').addEventListener('click',stop)