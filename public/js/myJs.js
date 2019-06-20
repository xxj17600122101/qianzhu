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

	var clientUl = $('.clients');
	var clientLi = $('.clients li');
	var clientMouse = $('.clients .mouse');

	var menuList = $('.page7 .nav .menu');
	var menuItem = $('.page7 .nav .menu .swiper-pagination-bullet');
	var menu = $('.menu-ul li');
	
	var menuItemOne = $('.page7 .nav .one');

	var news = $('.indexBotton .news .tempWrap ul');
	var newsTimer;

	
	// 顶部导航栏跟随效果
	navItem.on({mouseover : function(){
		var itemLength = parseInt(navItem.outerWidth(true));
		var disNav = itemLength*($(this).index()-1);
		navLine.css({left:function(){
			return disNav;
		}})
	} , mouseout : function(){
		var itemActive = $('#menu .active');
		var activeLength = itemActive.outerWidth(true);
		navLine.css({left:function(){
			return itemActive.outerWidth(true) * (itemActive.index()-1);
		}})
	}});


	// 电话输入框背景变化
	callInput.on({focus :function(){
		$(this).css({backgroundPositionY : -674});
	} , focusout : function(){
		$(this).css({backgroundPositionY : -706});
	}});
	

	// 右侧栏隐入效果
	closeIcon.toggle(function(){
		$(this).css({backgroundPositionX : -32});
		rightIndex.css({right : -50});
	} , function(){
		$(this).css({backgroundPositionX : 0});
		rightIndex.css({right : 0});
	});
	
	item.on({mouseover : function(){
		
		$(this).addClass('active').siblings().removeClass('active');
		var itemI = $('.items .active i');
		itemI.addClass('activeI');
	}, mouseout :function(){
		
		$(this).removeClass('active');
		var itemI = $('.items .active i');
		itemI.removeClass('activeI')
	}});
	
	caseLi.on({mouseover : function(){
		$(this).addClass('active').siblings().removeClass('active');

	}, mouseout :function(){
		$(this).removeClass('active');
	}});
	
	// clientLi.on({mouseover : function(){
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	var posX = ($(this).index()-1)%5;
	// 	var posY = $(this).index()-1;
	// 	var x = parseInt($(this).css('width'));
	// 	var y = parseInt($(this).css('height'));
		
	// 	if(posY > 4){
	// 		posY = 1;
	// 	}else{
	// 		posY = 0;
	// 	}
		
	// 	clientMouse.css({ opacity : 0.9 , left:function(){
	// 		return posX*(x+1);
	// 	},top:function(){
	// 		return posY*(y+1);
	// 	}})
	// }, mouseout : function(){
	// 	$(this).removeClass('active');
	// 	clientMouse.css({opacity : 0 });
	// }});

	clientUl.on('mouseover','li',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var posX = ($(this).index()-1)%5;
		var posY = $(this).index()-1;
		var x = parseInt($(this).css('width'));
		var y = parseInt($(this).css('height'));
		
		// clientMouse.css('display','block');

		$(this).addClass('active').siblings().removeClass('active');

		if(posY > 4){
			posY = 1;
		}else{
			posY = 0;
		}
		console.log($(this));	
		clientMouse.css({ opacity : 0.9 , left:function(){
			return posX*(x+1);
		}, top:function(){
			return posY*(y+1);
		}, })
	});
	clientUl.on('mouseout','li',function(){
		$(this).removeClass('active');
		// clientMouse.css({opacity : 0 , display : 'none'});
	});

	clientUl.on('mouseenter mouseleave' , function(){
		clientMouse.toggle();
	})




	// 关于页轮播
	menuItem.on('mouseenter',function(){
		var a = parseInt($(this).outerHeight()) * $(this).index() + parseInt(menuList.css('top'));
		$(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active');

		var menuItemA = $('.page7 .nav .menu .swiper-pagination-bullet-active');
		menuItemOne.css({ top : a });
		$(this).trigger("click");

	});




	// 新闻滚动
	var newsNum =0;
	newsTimer = setInterval(function(){
		newsNum++;
		news.css({top : function(){
				if(newsNum == 5){
					newsNum = 0;
					news.css({top: 0});
				}
				return newsNum*-20;
			}
		})
	},2000)
})