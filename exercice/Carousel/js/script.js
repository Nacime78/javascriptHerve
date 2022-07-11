"use strict";

function carousel(){
    let image = document.querySelector('img');
    let imageSrc = image.getAttribute('src');
    console.log(imageSrc);
    if(imageSrc == "img/killua.jpg"){
        image.src = "img/gojo1.jpg";
    }
    if(imageSrc == "img/gojo1.jpg"){
        image.src = "img/itadori.jpg";
    }
    if(imageSrc == "img/itadori.jpg"){
        image.src = "img/jujutsu0.jpg";
    }
    if(imageSrc == "img/jujutsu0.jpg"){
        image.src = "img/drstone.jpg";
    }
    if(imageSrc == "img/drstone.jpg"){
        image.src = "img/killua.jpg";
    }
}

let img = document.querySelector('img');
img.addEventListener("click", carousel);

// setInterval(carousel, 1500);