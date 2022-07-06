// "use strict";

// let age = 20;
// let age1 = 15;

// // On appel une structure conditionnelle les instructions qui permettent de tester si une condition est vraie ou non

// // if(expression){instruction}

// if(age >= 18){ // Ici je fais un teste en écrivant si(âge est supérieur ou égal à 18){alors tu afficheras dans console.log("Super, tu es majeur")}
//     console.log("Super, tu es majeur");
// }

// if(age1 >= 18){
//     console.log("Super, tu es majeur");
// }else{
//     console.log("Super, tu es mineur");
// }

// let couleur = "#ff0000";

// if(couleur == "#00ff00"){
//     console.log("vert");
// }else if(couleur == "#ff0000"){
//     console.log("rouge");
// }else{
//     console.log("test à refaire");
// }

// // BOB qui a 18 ans
// // Mélanie qui a 22 ans
// // Sarah qui a 15 ans
// // Créez des variables afin de sauvegarder ces gens
// // Sauvegarder également leurs âges
// // M'afficher dans la console avec la concaténation une phrase disant "Bienvenue à vous (nom de la personne) vous avez bien (tel âge) donc vous pouvez rentrer dans le casino"
// // Vous ne pouvez pas rentrer dans le casino

// let nomB = "Bob";
// let ageB = 18;
// let nomM = "Mélanie";
// let ageM = 22;
// let nomS = "Sarah";
// let ageS = 15;

// if(ageB >= 18){
//     console.log(`Bonjour ${nomB}, vous avez bien ${ageB} ans, donc vous pouvez rentrer dans le casino`);
// }else{
//     console.log(`Bonjour ${nomB}, vous avez bien ${ageB} ans, donc vous pouvez pas rentrer dans le casino`);
// }

// if(ageM >= 18){
//     console.log(`Bonjour ${nomM}, vous avez bien ${ageM} ans, donc vous pouvez rentrer dans le casino`);
// }else{
//     console.log(`Bonjour ${nomM}, vous avez bien ${ageM} ans, donc vous pouvez pas rentrer dans le casino`);
// }

// if(ageS >= 18){
//     console.log(`Bonjour ${nomS}, vous avez bien ${ageS} ans, donc vous pouvez rentrer dans le casino`);
// }else{
//     console.log(`Bonjour ${nomS}, vous avez bien ${ageS} ans, donc vous pouvez pas rentrer dans le casino`);
// }

// // CORRECTION
 
// let prenom1 = "Bob";
// let prenom2 = "Mélanie";
// let prenom3 = "Sarah";
// let ageBob = 18;
// let ageMelanie = 22;
// let ageSarah = 15;

// if(ageBob >= 18){
//     console.log(`Bonjour M./Mme ${prenom1} dans notre casino`)
// }else{
//     console.log(`Bonjour M./Mme ${prenom1} vous êtes trop jeune pour entrer dans notre casino`);
// }

// if(ageMelanie >= 18){
//     console.log(`Bonjour M./Mme ${prenom2} dans notre casino`)
// }else{
//     console.log(`Bonjour M./Mme ${prenom2} vous êtes trop jeune pour entrer dans notre casino`);
// }

// if(ageSarah >= 18){
//     console.log(`Bonjour M./Mme ${prenom3} dans notre casino`)
// }else{
//     console.log(`Bonjour M./Mme ${prenom3} vous êtes trop jeune pour entrer dans notre casino`);
// }

// // CORRECTION AVEC CHOIX UTILISATEUR

// let prenomUtilisateur = prompt("Quel est votre prénom ?");
// let ageUtilisateur = prompt("Quel est votre âge ?");

// if(ageUtilisateur >= 18){
//     console.log(`Bonjour et bienvenue ${prenomUtilisateur}, agé de ${ageUtilisateur} ans, dans notre casino`);
// }else{
//     console.log(`Bonjour ${prenomUtilisateur}, ${ageUtilisateur} ans est trop jeune pour entrer dans notre casino`);
// }

// Opérateur logique
let majeur = true;
let tenueCorrect = true;
let tenueCorrectBis = false;

// AND ou &&, les deux conditions doivent être vraies
console.log(`majeur et tenueCorrect ==> ${majeur && tenueCorrect}`);
// true
console.log(`majeur et tenueCorrect ==> ${majeur && tenueCorrectBis}`);
// false

// OR ou ||, une des deux conditions doit etre vraie 
console.log(`majeur ou tenueCorrect ==> ${majeur || tenueCorrect}`);
// true
console.log(`majeur ou tenueCorrect ==> ${majeur || tenueCorrectBis}`);
// true

// Demandez l'année de naissance d'une personne
// On effectuera le calcul de son âge (votre année de naissance)
// Selon son âge on lui fera un commentaire (tu es adolescent, adulte ou à la retraite)
// Entre 10 et 20 => adolescent
// Entre 20 et 60 => adulte
// Si tu as 60 ou plus => à la retraite
// ou Veuillez entrer une date de naissance valide

// let birthdate = parseInt(prompt("Veuillez entrer une année de naissance valide"));
// let ageReel = 2022 - birthdate;

// if((ageReel >= 0) && (ageReel <= 110)){
//     if((ageReel >= 10)  && (ageReel <= 20)){
//     console.log("Vous êtes un adolescent, profitez de la vie");
//     }else if((ageReel > 20) && (ageReel <= 60)){
//     console.log("Vous êtes un adulte");
//     }else if((ageReel > 60)){
//     console.log("Vous êtes vieux");
//     }else if((ageReel < 10) && (ageReel >= 3)){
//     console.log("Vous êtes un enfant");
//     }else{
//     console.log("Vous êtes un bébé");
//     }
// }else if(ageReel > 110){
//     console.log("Vous êtes un vampire ?");
// }else if(ageReel < 0){
//     console.log("Vous êtes né dans le futur ?")
// }else{
//     console.log("Entrez une date de naissance valide")
// }

// CORRECTION

// let anneeDeNaissance = prompt("Quel est votre année de naissance ?");
// let pseudo = "Bob";
// let ageReel = 2022 - anneeDeNaissance;
// if(ageReel >= 10 && ageReel < 20){
//     console.log(`tu es ado ${pseudo}`);
// }else if(ageReel >= 20 && ageReel <= 60){
//     console.log(`tu es adulte ${pseudo}`);
// }else{
//     console.log(`tu es retraité ${pseudo}`);
// }

// Switch

let panier = prompt("Choisissez parmis ces trois fruits ou légumes : courgette, carotte, tomate, banane");
switch(panier){
    case "courgette":
    // choix 1
        console.log(`Vous avez choisi :${panier}`);
        break; // casser la boucle
    case "carotte":
    // choix 2
        console.log(`Vous avez choisi :${panier}`);
        break;
    case "tomate":
    // choix 3
        console.log(`Vous avez choisi :${panier}`);
        break;
    case "banane":
    // choix 4
        console.log(`Vous avez choisi :${panier}`);
        break;
    default:
    // Fin de la boucle, on utilise default
        console.log(`Refaites votre choix`);
        panier = prompt("Choisissez parmis ces trois fruits ou légumes : courgette, carotte, tomate");
        break;
}

// Opérateur ternaire

// let age = prompt("Entrez votre age");
// let message = (age >= 18)?"Vous êtes majeur":"Vous êtes mineur";
// // let message = (test)?"     true     " : "     false      ";
