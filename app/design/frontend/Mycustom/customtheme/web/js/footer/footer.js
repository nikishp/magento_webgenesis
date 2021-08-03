require(['jquery', 'domReady!', 'matchMedia'], function($) {



    mediaCheck({
        media: '(max-width: 767px)',
        entry: function () {
            $('.custom-footer__content-item h4').on('click', function (){
                $(this).toggleClass('active');
                $(this).parent().find('ul').stop(true,true).slideToggle();
            })
        },
        exit: function () {
            $('.custom-footer__content-item h4').unbind('click');
            // $('.call-us-product a[href^="tel:"]').unbind('click');
        }
    });


});