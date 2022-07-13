"use strict";

$(document).ready(
    function(){
        
        $('fieldset .zone1').click(
            function(){
                $('h1').css({
                    "color": "green",
                    "text-align": "center",
                    "width": "80px",
                })
            }
        );

        $('.zone2').click(
            function(){
                $('body').css({
                    "background-color": "orange",
                })
            }
        );

        $('.zone3').click(
            function(e){
                e.preventDefault();
                $('body').css({
                    "background-color": "lightblue",
                })
            }
        );

        $('.zone5').click(
            function(e){
                e.preventDefault();
                $('body').css("background-color", $('.zone4').val());
            }
        );

        $('.zone7').click(
            function(e){
                e.preventDefault();
                $('.zone7').css("background-color", $('.zone6').val());
            }
        );

        $('.zone8').click(
            function(e){
                e.preventDefault();
                $('.zone8').css({
                    "background-color": "yellow",
                });
            }
        );

        // $('.zone9').click(
        //     function(e){
        //         e.preventDefault();
        //         $('body').css({
        //             "background-color": "yellow",
        //         });
        //     }
        // );

        $('.zone9').click(
            function(){
                $('.zone9').css({
                    "background-color": "lightyellow",
                });
                $(this).css({
                    "background-color": "green",
                });
            }
        );

        // $('.zone9').blur(
        //     function(){
        //         $('.zone9').css({
        //             "background": "LightSkyBlue",
        //             "padding": "20px",
        //             "margin": "20px",
        //         })
        //     }
        // );




    }
)