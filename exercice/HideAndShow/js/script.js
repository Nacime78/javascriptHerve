"use strict";

// let p1 = document.querySelector('.hide');
// let h1 = document.querySelector('h1');

// p1.hidden = true; // cache le paragraphe

// function cliquer(){
//     if(p1.hidden == false){ // si le paragraphe n'est pas caché :
//         p1.hidden = true; // le cache | ne l'affiche pas
//     }else{ // p.hidden == true
//         p1.hidden = false; // sinon ne le cache pas | l'affiche
//     }
// }

// h1.addEventListener("click", cliquer); // evenement sur le h1, click + appel de la fonction

let h1 = document.querySelector('h1');

h1.addEventListener('click', function hideAndShow(){

    let p = document.querySelectorAll("p"); // Nodelist de l'ensemble des "p"; une nodelist est une sorte de tableau donc il classera les éléments de l'index 0, au plus grand
    for(let i = 0; i < p.length; i++){
        let pIndex = p[i]; // A chaque tour de boucle je viens stocker un paragraphe dans la variable pIndex
        // console.log(pIndex);
        let pIndexClass = pIndex.getAttribute('class');
        console.log(pIndexClass);
        if(pIndexClass == "hide"){
            pIndex.setAttribute("class", 'show');
        }else if(pIndexClass == "show"){
            pIndex.setAttribute("class", 'hide');
        }
    }
});



