"use strict";

// Syntaxe
// for(initialisation; condition; incrémentation){#instruction}

// for(let i = 0; i <= 20; i++){
//     console.log(`Salut n°${i}`);
// }

// i++ = i + 1
// i += 1, 2, 3 etc.. incrémentation de 1, 2, 3 etc..

// ---- Afficher table de multiplication d'un nombre choisi par l'utilisateur -----

// let nbr = prompt("Choisissez un nombre");

// for(let i = 10; i <= 10; i++){
//     console.log(`${i} * ${nbr} = ${nbr * i}`);
// }

// ----- Parité -----

// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(`${i} est pair`);
//     }else{
//         console.log(`${i} est impair`);
//     }
// }

// ----- Afficher un compte à rebours avec un "Bonne année" à la place de 1 -----

// for(let i = 10; i >= 0; i--){
//     if(i != 0){
//         console.log(i);
//     }else{
//         console.log("Bonne année");
//     }
// }

// Nous avons :
// Une machine à valider les colis
// Pour être accepté un colis ne doit pas excéder 25cm de longueur, 15cm de largeur et 20cm de hauteur
// Ecrivez le programme de la machine
// Vous demandez à l'utilisateur les dimensions du colis
// Première étape : le programme dit juste si le colis est accepté ou non
// Seconde étape : le programme  vous annonce plus particulièrement quelle mesure ne convient pas
// (longueur refusé/hauteur refusé/largeur refusé)
// Afficher le résultat dans la console

// function testColisLong(longueur){
//     if(longueur <= 25 && longueur >= 0){
//         console.log(`Votre colis de ${longueur} cm est aux normes au niveau de la longueur`);
//         return true;
//     }else{
//         console.log(`Votre colis de ${longueur} cm n'est pas aux normes de la machine au niveau de la longueur`);
//         return false;
//     }
// }

// function testColisLarg(largeur){
//     if(largeur <= 15 && largeur >= 0){
//         console.log(`Votre colis de ${largeur} cm est aux normes au niveau de la largeur`);
//         return true;
//     }else{
//         console.log(`Votre colis de ${largeur} cm n'est pas aux normes de la machine au niveau de la largeur`);
//         return false;
//     }
// }

// function testColisHaut(hauteur){
//     if(hauteur <= 20 && hauteur >= 0){
//         console.log(`Votre colis de ${hauteur} cm est aux normes au niveau de la hauteur`);
//         return true;
//     }else{
//         console.log(`Votre colis de ${hauteur} cm n'est pas aux normes de la machine au niveau de la hauteur`);
//         return false;
//     }
// }

// function resultat(longueur, largeur, hauteur){
//     if(testColisLong(longueur) === true && testColisLarg(largeur) === true && testColisHaut(hauteur) === true){
    //     console.log("Votre colis est accepté");
    // }else{
    //     console.log("Votre colis n'est pas accepté");
    // }
// }

// testColisLong(long);
// testColisLarg(larg);
// testColisHaut(haut);
// resultat(long, larg, haut);

// Initialisation de la fonction testColis
function testColis(long, larg, haut){
    // Initialisation des variables
    let longMax = 25; // Longueur max
    let largMax = 15; // Largeur max
    let hautMax = 20; // Hauteur max
    let min = 0; // Dimension minimale
    // La fonction contrôle la longueur du colis, celui-ci doit être compris entre 0 et 25
    if(min <= long <= longMax){ // 0 <= longueur <= 25
        console.log(`Votre colis de ${long} cm est aux normes au niveau de la hauteur`); // Si la condition est verifiée : longueur acceptée
    }else{
        console.log(`Votre colis de ${long} cm n'est pas aux normes, longueur refusée`); // Sinon : longueur refusée
    }
    // La fonction contrôle la largeur du colis, celui-ci doit être compris entre 0 et 15
    if(min <= larg <= largMax){ // 0 <= largeur <= 15
        console.log(`Votre colis de ${larg} cm est aux normes au niveau de la largeur`); // Si la condition est verifiée : largeur acceptée
    }else{
        console.log(`Votre colis de ${larg} cm n'est pas aux normes de la machine, largeur : refusée`); // Sinon : largeur refusée
    }
    // La fonction contrôle la hauteur du colis, celui-ci doit être compris entre 0 et 20
    if(min <= haut <= hautMax){ // 0 <= hauteur <= 20
        console.log(`Votre colis de ${haut} cm est aux normes au niveau de la hauteur`); // Si la condition est verifiée : hauteur acceptée
    }else{
        console.log(`Votre colis de ${haut} cm n'est pas aux normes, hauteur : refusée`); // Sinon : hauteur refusée
    }
    // Vérification du colis, si celui-ci remplit toutes les conditions [Longueur acceptée && Largeur acceptée && Hauteur acceptée]
    if((min <= long <= longMax) && (min <= larg <= largMax) && (min <= haut <= hautMax)){
        console.log("Votre colis est accepté"); // Si la condition est verifiée : colis accepté
    }else{
        console.log("Votre colis n'est pas accepté"); // Sinon colis refusé
    }
}

// Initialisation des variables choisies par l'utilisateur
let long = prompt("Veuillez préciser la longueur de votre colis");
let larg = prompt("Veuillez ensuite préciser la largeur");
let haut = prompt("Veuillez maintenant préciser la hauteur");

// Rappel de la fonction avec les variables choisies par l'utilisateur
testColis(long, larg, haut);