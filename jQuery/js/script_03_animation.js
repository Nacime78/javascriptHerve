"use strict";

$(document).ready(
    function(){

        $('#fadein').click(
            function(){
                $('#rouge').fadeIn();
                $('#bleu').fadeIn('slow');
                $('#vert').fadeIn(5000);
            }
        )

        $('#fadeout').click(
            function(){
                $('#photo').fadeOut();
                $('#gris').fadeOut('slow');
                $('#jaune').fadeOut(5000);
            }
        )

        $('#fadetoggle').click(
            function(){
                $('#photo2').fadeToggle();
                $('#orange').fadeToggle('slow');
                $('#rose').fadeToggle(5000);
            }
        )

        $('#fadeto').click(
            function(){
                $('#formulaire').fadeTo( "slow", 1);
                $('#coucou').fadeTo( "slow", 1);
                $('#marron').fadeTo( "slow", 1);
            }
        )

        $('#fadeto2').click(
            function(){
                $('#formulaire').fadeTo( "slow", 0);
                $('#coucou').fadeTo( "slow", 0);
                $('#marron').fadeTo( "slow", 0);
            }
        )

        $('#barre').click(
            function(){
                $('#rideau').slideDown("slow");
            }
        )

        $('#barre').click(
            function(){
                $('#rideau').slideDown("slow");
            }
        )

        $('#barre2').click(
            function(){
                $('#rideau2').slideUp("slow");
            }
        )

        $('#btn-simple').click(
            function(){
                $('#simple').animate({
                    "transform","rotate(20deg)",
                }, "slow");
            }
        )

        $('#btn-double').click(
            function(){
                $('#double').animate({
                    "bottom": "250px"
                }, "slow");
            }
        )

        $('#btn-agg').click(
            function(){
                $('#agg').animate({
                    "width": "400px", "height": "400px", "line-height": "150px",
                }, "slow");
            }
        )

        $('#btn-toggle').click(
            function(){
                $('#toggle').animate({
                    "width": "toggle", "height": "toggle", "line-height": "toggle",
                }, "slow");
            }
        )

        $('#btn-etape').click(
            function(){
                $('#etape').animate({"width": "400px", "height": "400px", "left": "1000px"}, 1000);
                $('#etape').animate({"width": "300px", "height": "300px", "top": "200px"}, 1000);
            }
        )

        $('#btn-etape2').click(
            function(){
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "10px", "top": "10px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "20px", "top": "20px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "30px", "top": "30px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "40px", "top": "40px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "50px", "top": "40px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "60px", "top": "40px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "70px", "top": "30px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "80px", "top": "20px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "90px", "top": "10px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "90px", "top": "-10px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "80px", "top": "-20px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "70px", "top": "-30px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "60px", "top": "-40px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "50px", "top": "-50px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "40px", "top": "-60px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "30px", "top": "-70px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "20px", "top": "-70px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "10px", "top": "-70px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-10px", "top": "-60px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-20px", "top": "-50px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-30px", "top": "-40px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-40px", "top": "-30px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-50px", "top": "-20px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "-60px", "top": "-10px" }, 100);
                $('#etape2').animate({"width": "100px", "height": "100px", "left": "1000px"}, 2000);
            }
        )

        $('#simple1').on('mouseenter', function(){ // Autre syntaxe
            $(this).animate({left:'280px'}, 2000); 
        });

        $('#double1').on('dblclick', function(){ // Autre syntaxe
            $(this).animate({top: '280px', left: '350px'}, 4000).fadeOut(5000);
        });

        $('#toggle1').click(function(){
            $('#double1').animate({"width": "toggle", "height": "toggle"}, 3000);
        })

        $('#animation1').click(function(){
            $(this).animate({left:'280px'}, 1000)
            .animate({bottom: '300px', width:'250px', height: '250px'}, 2000)
            .animate({borderRadius: '40%'}, 3000)
            .delay(2000) // Delay permet de faire une pause durée en millisecondes
            .animate({width: '150px'}, 1500)
            .animate({bottom: '0', left: '0'}, 2000)
        })

        $('#monBloc input').keyup(function(){
            $('#monBloc input').val($(this).val());
        })
    }
)