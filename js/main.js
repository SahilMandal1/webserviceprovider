$(document).ready(function() {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on("scroll load", function() {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Sticky navbar which sticks on the top
        if($(window).scrollTop() > 30) {
            $('.header').css({'background':'#6c5ce7', 'box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        } else {
            $('.header').css({'background':'none', 'box-shadow':'none'});
        }
    });

   $('.accordion-header').click(function() {
        $('.accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
   });


});