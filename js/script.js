/* SCROLL BUTTON ****************************************/
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $("#toTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    
});