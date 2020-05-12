function buttonFadeInInit(){
$('.start-button').fadeIn('slow');
}

function preloaderFadeOutInit(){
$('.preloader').fadeOut('slow');
$('body').attr('id','');
}

// Window load function
$(window).on('load', function () {
(function ($) {
buttonFadeInInit();
})(jQuery);
});

//Start button function
$('.start-button').click(function () {
(function ($) {
preloaderFadeOutInit();
})(jQuery);
});
