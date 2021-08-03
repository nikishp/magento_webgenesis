// require(['jquery', 'domReady!', 'owlcarousel'], function($) {
require(['jquery', 'owlcarousel'], function($) {
    $('.owl-carousel').owlCarousel({
        navigation : true, // Show next and prev buttons
        autoPlay: false, //Set AutoPlay to 3 seconds
        items : 3
    });

    $('.nav-cust-toggle').on('click', function (){
        $('.hamburger--js').toggleClass('open');
        $('.navigation').stop(true,true).slideToggle();
    })

    $('.nav-toggle').on('click', function (){
        $('.nav-sections').toggleClass('active');
    })

    let elemenLength = $(".navigation > ul > li");
    let countElement = Math.ceil( $(".navigation > ul > li").length / 4 );
    for(let i = 0; i < elemenLength.length; i+=countElement) {
        elemenLength.slice(i, i+countElement).wrapAll("<li class='navigation__item'><ul></ul></li>");
    }



    console.log('this file js');
});