$(function(){
	var nav = $('#menu');
	var navLine = $('#menu .line');
	var navItem = $('#menu li');
	var rightIndex = $('.indexRight ul');
	var rightIcons = $('.indexRight ul li');
	var callInput = $('.callback input');
	var closeIcon = $('.closeIcon');
	var item = $('.items li');
	var caseLi = $('.caseList li');
	var clientLi = $('.clients li');
	var clientMouse = $('.clients .mouse');

	var menuList = $('.page7 .nav .menu');
	var menuItem = $('.page7 .nav .menu .swiper-pagination-bullet');
	
	var menuItemOne = $('.page7 .nav .one');
	
	navItem.on('mouseover',function(){
		var itemLength = parseInt(navItem.outerWidth(true));
		var disNav = itemLength*($(this).index()-1);
		navLine.css({left:function(){
			return disNav;
		}})
	});
	navItem.on('mouseout',function(){
		var itemActive = $('#menu .active');
		var activeLength = itemActive.outerWidth(true);
		navLine.css({left:function(){
			return itemActive.outerWidth(true) * (itemActive.index()-1);
		}})
	});
	
//	rightIcons.on('hover',function(){
//		$(this).addClass('active').siblings().removeClass('active');
//	});
//	rightIndex.on('mouseleave',function(){
//		rightIcons.removeClass('active');
//	});
	
	callInput.on('focus',function(){
		$(this).css({backgroundPositionY : -674});
	});
	
	callInput.on('focusout',function(){
		$(this).css({backgroundPositionY : -706});
	});
	
	closeIcon.toggle(function(){
		$(this).css({backgroundPositionX : -32});
		rightIndex.css({right : -50});
	} , function(){
		$(this).css({backgroundPositionX : 0});
		rightIndex.css({right : 0});
	});
	
	item.on('mouseover',function(){
		
		$(this).addClass('active').siblings().removeClass('active');
		var itemI = $('.items .active i');
		itemI.addClass('activeI');
	});
	item.on('mouseout',function(){
		
		$(this).removeClass('active');
		var itemI = $('.items .active i');
		itemI.removeClass('activeI')
	});
	
	caseLi.on('mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	caseLi.on('mouseout',function(){
		$(this).removeClass('active');
	});
	
	clientLi.on('mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var posX = ($(this).index()-1)%5;
		var posY = $(this).index()-1;
		var x = parseInt($(this).css('width'));
		var y = parseInt($(this).css('height'));
		
		if(posY > 4){
			posY = 1;
		}else{
			posY = 0;
		}
		
		clientMouse.css({ opacity : 0.9 , left:function(){
			return posX*(x+1);
		},top:function(){
			return posY*(y+1);
		}})
	})
	clientLi.on('mouseout',function(){
		$(this).removeClass('active');
		clientMouse.css({opacity : 0 });
		clientMouse.css({display : 'none' });
	})

	// clientLi.on('mouseenter')

	// 导航条文字
	menuItem.eq(0).html('思想');
	menuItem.eq(1).html('关于');
	menuItem.eq(2).html('荣誉');

	menuItem.on('mouseenter',function(){
		var a = parseInt($(this).outerHeight()) * $(this).index() + parseInt(menuList.css('top'));
		$(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');

		var menuItemA = $('.page7 .nav .menu .swiper-pagination-bullet-active');
		menuItemOne.css({ top : a })
		$(this).trigger("click");
	});

	
})