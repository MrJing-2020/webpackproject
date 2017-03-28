;
$(function() {
    jQuery.cumTheme();
    jQuery.cumThemeInit();
    $(".nav-router").click(function() {
        setTimeout(function() {
            jQuery.cumTheme();
            jQuery.cumThemeInit();
        }, 300);

    });
    $('.nav.nav-main').find('li').click(
        function() {
            if ($(this).attr('class') == undefined || $(this).attr('class') == '') {
                $('.nav.nav-main').find('.nav-active').removeClass('nav-active')
                $(this).addClass('nav-active');
            }
        }
    );
});
