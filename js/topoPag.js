$(document).ready(function () {

    $('#arrowUp').hide(); //Esconder o elemento após carregar o JQuery.

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('#arrowUp').fadeIn();
        } else {
            $('#arrowUp').fadeOut();
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});