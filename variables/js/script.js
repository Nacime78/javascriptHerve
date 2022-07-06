"use strict";
// Script entier en mode strict, ne tolère aucune erreur/oublie

let prenom; // 1ère lettre d'une variable jamais en MAJ, pareil pour les chiffres, jamais en 1er
// L'utilisation de var est également possible

console.log('prenom'); //  Affiche prenom dans la console

prenom = 'Nacime'; // On donne une valeur à notre variable

console.log(typeof prenom); // La console nous donne le type de notre variable

let age = '22';

console.log(typeof age); // Malgré la présence de chiffre j'ai une variable de type String, due à la présence de guillemet

age = 22; // Ici on passe notre variable age d'un type String à un type Number

console.log(typeof age); // La console nous affiche biensûr Number

let nbrDecimal = 1.5;

console.log(typeof nbrDecimal); // Javascript ne fait pas la différence entre les nombres entiers et les nombres décimaux

let valider = true;

console.log(typeof valider); // La console nous affiche Boolean, car true et false (vrai ou faux) sont des booléens 

// Concaténation
// Il s'agit d'additionner plusieurs variables entre elles 
// alert("Ohayo " + prenom + ", tu déchires en JS !"); ANCIENNE METHODE

// alert(`Bonjour ${prenom}, tu déchires en JS; tu as ${age} ans => tu es jeune !!`); // `` = alt gr + 7

let nbr1 = 1;
let nbr2 = 2;
let resultat = nbr1 + nbr2;

console.log(resultat);

// Exemple

let nbr3 = 10 % 3;
// Ligne 38 je vais chercher le modulo (reste de la division) de 10 % 3 
// Le résultat sera 1;

// Deux fonctions importantes

let chaine1 = "37";
let chaine2 = "102.58";
console.log(`Concatenation => ${chaine1 + chaine2}`); // Une concatenation

console.log(parseInt(chaine1) + parseFloat(chaine2));
// parseInt() on transforme la chaine de caractère en chiffre ENTIER
// parseFloat() on transforme la chaine de caractère en nombre DÉCIMAL

//  Constante

const nom = "Nacime";

// La portée des variables

let variableLet = "global";
var variableVar = "global";

console.log(variableLet); // global
console.log(variableVar); // global

if(true){
    let variableLet = "local";
    var variableVar = "local";

    console.log(variableLet); // local
    console.log(variableVar); // local
}

console.log(variableLet); // global
console.log(variableVar); // global





