"use strict";

// fonction sans paramètres
function saluer(){
    console.log("Salut !");
}
saluer();

// typeof saluer => fonction

/* function nomDeLaFonction(){
    Instruction à éxécuter;
}
nomDeLaFonction(); // appel de la fonction
*/
// fontion avec paramètres


// function saluerQqun(nom){
//     console.log(`Salut ${nom}`);
// }

// let prenom = prompt("Qui êtes-vous ?");
// saluerQqun(`${prenom}`);

function saluerQqun(nom, age){
    console.log(`Salut ${nom}`);
    console.log(`Tu as ${age} ans`);
}

let prenom = "Tatsuya";
let age = 20;
saluerQqun(prenom, age);

// Créer une fonction avec deux paramètres : pseudo et mail; afficher en consoler une concaténation qui salue la personne et valide son adresse mail
// L'appel de la fonction sera dynamique

function pseudoMail(pseudo, mail){
    console.log(`Salut ${pseudo}`);
    console.log(`Votre mail ${mail} est valide`);
}

let pseudo = prompt("Entrez votre pseudo");
let mail = prompt("Entrez un mail valide");

pseudoMail(pseudo, mail);

// let functionAnonyme = function(){
//     console.log("je suis la fonction anonyme");
// }
// functionAnonyme();

// ES6 fonction flèche
let functionFlecher = () =>{
    console.log("je suis la fonction fléchée");
}
functionFlecher();


