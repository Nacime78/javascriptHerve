"use strict";

// egal.addEventListener("click", function calcu(){
//     let nbr1 = document.getElementById('#nbr1').value;
//     let nbr2 = document.querySelector('#nbr2').value;
//     let selec = document.querySelectorAll('#ope').value;
//     let egal = document.querySelector('#egal');
//     let result = document.querySelector('#result');
//     console.log(selec);
//     console.log(nbr1);
//     console.log(nbr2);
//     console.log(egal);
//     console.log(result);
//     if(selec == 'addition'){
//         egal.addEventListener("click", function addition(){
//             result.innerHTML = `${nbr1 + nbr2}`
//         });
//     }
//     if(selec == 'soustraction'){
//         egal.addEventListener("click", function soustraction(){
//             result.innerHTML = `${nbr1 - nbr2}`
//         });
//     }
//     if(selec == 'multiplication'){
//         egal.addEventListener("click", function multiplication(){
//             result.innerHTML = `${nbr1 * nbr2}`
//         });
//     }
//     if(selec == 'division'){
//         egal.addEventListener("click", function division(){
//             result.innerHTML = `${nbr1 / nbr2}`
//         });
//     }
// });

function test(){
    let nbr1 = parseFloat(document.querySelector('#nbr1').value);
    let nbr2 = parseFloat(document.querySelector('#nbr2').value);
    let selec = document.querySelector('#ope').value;
    let result = document.querySelector('#result');
    console.log(nbr1);
    console.log(typeof nbr1);
    console.log(nbr2);
    console.log(typeof nbr2);
    console.log(selec);

    if(selec == "addition"){
            result.setAttribute('value', nbr1 + nbr2);
            console.log(result);
    }
    if(selec == 'soustraction'){
            result.setAttribute('value', nbr1 - nbr2);
            console.log(result);
    }
    if(selec == 'multiplication'){
            result.setAttribute('value', nbr1 * nbr2);
            console.log(result);
    }
    if(selec == 'division'){
        if(nbr2 == 0){
            result.value = 'impossible';
        }else{
            result.setAttribute('value', nbr1 / nbr2);
            console.log(result);
        }
    } 
}

let egal = document.querySelector('#egal');
egal.addEventListener("click", test);