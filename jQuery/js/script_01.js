"use strict",

$(document).ready( // Début de votre code
    function(){
        
        $('h6').click(
            function(){
                alert("Hello");
            }
        );

        $('#moi').click(
            function(){
                $('h3').hide();
            }
        );
        
        $('#moi2').click(
            function(){
                $(this).hide(); // Cibler l'élément de départ
            }
        );

        $('.photos').dblclick(
            function(){
                $('h3').show();
            }
        );

        $('#zone-rouge').mouseenter(
            function(){
                alert("Bonjour");
            }
        );

        $('#texte').mouseleave(
            function(){
                alert("Voici un joli texte que j'aimerai que vous lisiez")
            }
        );

        $('#zone-verte').hover(
            function(){ // Cette fonction correspond au mouseenter
                alert('vous entrez dans la zone verte');
            },
            function(){ // mouseleave
                alert('vous sortez de la zone verte');
            }
        );

        $('#zone-bleue').mousedown(
            function(){
                $('#zone-rose').hide();
            }
        );

        $('#zone-bleue').mouseup(
            function(){
                $('#zone-rose').show();
            }
        );

        // Zone de formulaire, on va y mettre du css

        $('#form').css({
            "display": "flex",
            "flex-direction": 'column'
        });

        $('label').css("display", "block");

        $('input').css({
            "border": "2px solid red",
            "width": "50%",
            "margin-top": "2px",
        });

        $('input').focus(
            function(){
                $(this).css({
                    "background": "yellow",
                    "border": "4px dashed blue",
                })
            }
        );

        $('input').blur(
            function(){
                $(this).css({
                    "background": "white",
                    "border": "2px solid red",
                })
            }
        );

        $('#interrupteur').click(
            function(){
                $('#on-off').toggle();
            }
        );

        $('#lent').click(
            function(){
                $('#lentement').fadeOut(3000); // or hide(1000);
            }
        );
    }
    
) // Fin du code

