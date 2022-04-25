$(doocument).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

     $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').toggleClass('toggle');


     });

    //  smooth scrolling

    $('a[href*="#]').click(function(e){

        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );

    });

});