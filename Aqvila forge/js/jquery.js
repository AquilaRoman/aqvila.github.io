// jQuery

$(document).ready(function () {
	$("#page").on('mouseenter', function () {
		for (let i = 0; i < 10000; i++) {
			$(".title").fadeTo(700, 0.2);
			$(".title").fadeTo(700, 0.9);
		}
	});
});

$(document).ready(function () {
	$('.swordProducts').hide();
	$(".gallery").hover(function () {
		$(this).children('.swordProducts').stop(true, true).slideToggle('slow');
	});
});

function fading(image, divs) {
	$(image).hide();
	$(divs).mouseenter(function () {
		$(image).show(1500);
	});
}

$(document).ready(fading("#aboutPhoto img", "#main"));
$(document).ready(fading(".profile-photo img", "#about_us"));

$(document).ready(function(){
	$('.moreAbout').hide();
	$('.gallery a').click(function(e){
		$(this).parent().parent().find(".moreAbout").toggle(400);
	})
});
		
$("#navigation li a").hover(function(){
	$(this).addClass("menuHover")
},
	function(){
		$(this).removeClass("menuHover")
	}
);

$(window).scroll(function(){
	if($(this).scrollTop()>50){
		$("#scrollUp").fadeIn(100);
	}
	else
	{
		$("#scrollUp").fadeOut(100);
	}
});

$("#scrollUp").click(function(){
	$("body, html").animate({scrollTop:0},500
	);
});