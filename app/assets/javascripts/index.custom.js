;
$(function() {
	jQuery.Cumtheme();
	jQuery.cumThemeInit();
	$(".nav-router").click(function() {
		jQuery.Cumtheme();
		jQuery.cumThemeInit();
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
