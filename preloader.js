function preloaderFadeOutInit(){
$('.preloader').fadeOut('slow');
$('body').attr('id','');
}

//Start button function
$('.start-button').click(function () {
(function ($) {
preloaderFadeOutInit();
})(jQuery);
});
