(function($){
    'use strict';

    //Scroll Nav active class
    $('.main-nav .navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 30
        }, 1000);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });	

    $('.main-nav .navbar-nav .nav-item .nav-link').click(function(){
        $('.main-nav .navbar-nav .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Project Slider
    $('.project-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

})(jQuery);