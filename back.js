const body = document.querySelector("body");
const IMG_NUMBER = 3;


function paintImage(potato){
    const image = new Image();
    image.src= `https://github.com/sbbtt/js-clock/blob/master/images/${potato + 1}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);

    
}

function genRandom(){
    const number = Math.floor(Math.random()* IMG_NUMBER);
    console.log(number);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();