$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 241) $("#fixmenu").css({top: '0', position: 'relative'});
else $("#fixmenu").css({top: '0', position: 'fixed'});
});
});
