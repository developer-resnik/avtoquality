$(document).ready(function(){

	const swiperKeys = new Swiper('.swiper-keys', {
		loop: true,
		navigation: {
			nextEl: '.keys-button-next',
			prevEl: '.keys-button-prev',
		},
	});

	const swiperFeed = new Swiper('.swiper-feedback', {
		loop: true,
		navigation: {
			nextEl: '.feed-button-next',
			prevEl: '.feed-button-prev',
		},
	});

	$('.bars').click(function(){
		$('.menu-wrap').addClass('show');
		$('body').addClass('no-scroll');
	});
	$('.close-menu').click(function(){
		$('.menu-wrap').removeClass('show');
		$('body').removeClass('no-scroll');
	});
	$('.menu-wrap').click(function(e) {
		if ($(e.target).closest('.menu-wrap .wrapper').length == 0) {
			$('.menu-wrap').removeClass('show');
			$('body').removeClass('no-scroll');	
		}
	});

	if ( $(window).width() < 1200 ){
		$('.drop-point').click(function(){
			$('.drop-menu').slideToggle();
			$('.drop-point').toggleClass('active');
		});

	}

	$('.btn-comment-add').click(function(){
		$('.header-comments').fadeOut(300);
		$('.comment-respond').fadeIn(300);
	});

});