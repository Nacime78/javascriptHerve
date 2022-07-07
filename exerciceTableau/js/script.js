let nomLiens = ['Google', 'Ecosia', 'Qwant'];
let liens = ["https://www.google.fr/", "https://www.ecosia.org/", "https://www.qwant.com/"];
let a = document.querySelectorAll('a'); // On séléctionne tous les éléments a du html

for (let i = 0; i < nomLiens.length; i++){ // Pour i = 0; faire un boucle pour i < longueur du tableau, car tableau = [0, 1, 2], il y a 3 éléments mais l'index du tableau est 0
    console.log(nomLiens[i]);
    console.log(a[i]);
    a[i].innerHTML = nomLiens[i]; // Ecrire dans le a[0], l'élément [0] du tableau, pareil pour a[1] = [1] etc..
    a[i].setAttribute("href", liens[i]); // Ecriture dans l'attribut href
    // a[i].href = liens[i]; autre utilisation de la ligne du dessus
    a[i].setAttribute("target", "_blank");
}

// a = document.querySelectorAll('a');
// for(let i = 0; i < liens.length; i++){
//     a[i].setAttribute("href", liens[i]);
//     a[i].setAttribute("target", "_blank");
// }

// TEST forEach;

// function boucle(){
//     for(let i = 0; i < nomLiens.length; i++ ){
//         a[i].textContent = nomLiens[i];
//         a[i].setAttribute("href", liens[i]);
//         a[i].setAttribute("target", "_blank");
//     };
// }

// nomLiens.forEach(element =>{
//     boucle(element);
// });
