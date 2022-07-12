// La disponibilité du DOM

// A partir du moment où mon DOM, c'est-à-dire l'ensemble de l'arborescence de ma page HTML est complètement chargé; je peux commencer à utiliser jQuery

// Je vais mettre l'ensemble de mon code dans une fonction, de mon code dans une fonction, cette fonction sera appelée AUTOMATIQUEMENT ! Par jQuery lorsque le DOM sera entièrement défini.

// 3 façons de faire

// ----------------------------------------

jQuery(document).ready(function(){
    // Ici, le DOM est entièrement chargé, je peux procéder à mon code JS ...
});

// --- 2ème possibilité :
$(document).ready(function(){
    // --- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS ...
});

// --- 3ème possibilité :
$(function(){
    // --- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS ...
});

// --- 3ème possibilité :
$(() =>{
    alert('Bienvenue dans ce cours jQuery !');

    // -- EN JS
    document.querySelector('#TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

    // -- en JQ

    // En jQuery les sélécteurs sont les mêmes qu'en CSS
    $('#TexteEnJQuery').html("Mon texte en JQ");
}
)



