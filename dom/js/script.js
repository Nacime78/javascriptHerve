"use strict";

// Récupérer les balises par leurs noms

let header = document.getElementsByTagName("header");
console.log(header);

// Récupérer les éléments par l'ID

let logo = document.getElementById("logo");
console.log(logo);

// Récuperer les éléments par le class

let container = document.getElementsByClassName("container");
console.log(container);

// Récupération version ES6

let h1 = document.querySelector('h1');
console.log(h1);

// version ES6

header = document.querySelector("header");
console.log(header);

// Le sélécteur ne récupère que le 1er p de la classe p1

let p = document.querySelector('p');
console.log(p);

// Ici on récupère tous les p

p = document.querySelectorAll('p');
console.log(p);

// On récupère le p de la classe p2
p = document.querySelector('.p2');
console.log(p);

document.body.append("Test !!!!");
h1.append('Je suis à côté du titre');

// Le texte ici remplace tout le contenu du h1
h1.textContent = "Hello World";

// Créer un élément
let helloWorld = document.createElement('div'); // Création d'une variable helloWorld contenant une div
helloWorld.textContent = "HelloWorld2LeRetour"; // Cette div contient le texte "HelloWorld2LeRetour"
helloWorld.style.background = "#ffbd69"; // On donne un style à cette div : background-color: #ffbd69;
helloWorld.style.textAlign = 'center'; // On lui donne également un text-align: center;
document.body.insertBefore(helloWorld, document.querySelector('.container')); // Puis on l'insère dans la page avec un "insertBefore",
// -- insérer avant la classe "container", (1er élément : la variable qu'on a créé, 2ème élément : la classe container)

// document.querySelector('h2').remove();
// Le h2 est retiré

let h2 = document.querySelector('h2');
h2.remove();

// Quand on passe la souris sur la zone
let bt = document.querySelector('button');
bt.onmouseover=()=>{
    document.body.style.background = "purple";
}

// Quand on retire la souris de la zone
function exit(){
    document.body.style.background="aquamarine";
}
bt.addEventListener("mouseout", exit);
