"use strict";

// ************ VARIABLES *******************

var index;
var photos;
var total;

// ************* FONCTION *******************

function onClickListItem(){
    var selectedPhotos;
    // Dans un gestionnaire d'évènement (et uniquement dans ce cas-là) la variable this représente l'objet DOM qui a déclenché l'évènement.
    // Il s'agit donc de la balise li sur laquel on a cliqué
    // On active ou on désactive
    this.classList.toggle('selected');

    selectedPhotos = document.querySelectorAll('#photo-list li.selected');
    // Recherche de toutes les balises <li> séléctionnées.

    //document.querySelectorAll(); renvoi un tableau avec autant d'objet DOM manipulables en Javascript que de balises trouvées.

    // selectedPhotos possède donc une propriété length représentant toutes les photos séléctionnées.

    total.textContent = selectedPhotos.length;
}

// Recherche de toutes les balises <li> (les photos)
// Recherche de la balise em dans l'id total
photos = document.querySelectorAll('#photo-list li');
total = document.querySelector('#total em');

for(index = 0; index < photos.length; index++){
    photos[index].addEventListener("click", onClickListItem);
}