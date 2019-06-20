$(document).ready(function() {
	var menuList = $('.page7 .nav .menu');
	var menuItemOne = $('.page7 .nav .one');
	var menuItem = $('.page7 .nav .menu .swiper-pagination-bullet');
	var swiperBox = $('.abouts .swiper-container2');
	var n = 0;

// 首页轮播 
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    autoplayDisableOnInteraction : false,
	    autoplay : 3000,
	    slidesPerView :1,
	    loop :true,

		

	});

// 关于页轮播
	var swiper2 = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay : 2000,
        loop : true,
        slidesPerView : 1,
	    autoplayDisableOnInteraction : false,

        onSlideChangeStart: function(swiper){
			$(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');
			var menuItemA = $('.page7 .nav .menu .swiper-pagination-bullet-active');
			menuItemOne.css({ top : menuItemA.index() * 42 + 150});

			$('.menu-ul li:eq('+menuItemA.index()+')').addClass('active').siblings().removeClass('active');
	    },
	   
    });

	menuItem.on({mouseover : function(){
		swiper2.stopAutoplay();
	}, mouseout : function(){
		swiper2.startAutoplay();
	}});

});
