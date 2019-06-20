$(document).ready(function() {
	var oBg = $('.bg');
	var oLogo = $('header .logo');
	var oLogoImg = $('header .logo img');
	var nav = $('#menu');
	var navItem = $('#menu li');	//文字
	var certLink = $('.cert');
	var icon = $('.phoneIcon');
	var numBox = $('.phoneNum');
	var num = $('.phoneNum span');
	var line = $('#menu .line');
	var navItem = $('#menu li');
	var itemLength = parseInt(navItem.outerWidth(true));
	var pageUp = $('.up');
	var pageDown = $('.down');
	
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
		menu: '#menu',
		
		onLeave : function(index, nextIndex, direction){
			line.css({left : function(){
				return itemLength * (nextIndex-1);
			}})
			
			if(nextIndex != 1){
				oBg.css({height : 70});
				oLogo.css({height : 33.3, width : 210})
				oLogoImg.css({height : 33.3, width : 210})
				nav.css({marginTop : 26});
				line.css({top : -26});
				navItem.css({fontSize : 16});
				certLink.css({top : -50});
				icon.css({top : 25 , right : 210});		//电话图标
				num.css({top : 20, fontSize : 20});
				numBox.css({right : 200});
			}else{
				oBg.css({height : 0});
				oLogo.css({height : 49, width : 290});
				oLogoImg.css({height : 49, width : 290});
				nav.css({marginTop : 36});
				line.css({top : -36});
				navItem.css({fontSize : 20});
				certLink.css({top : 84});
				icon.css({top : 35 ,right : 230});		//电话图标
				num.css({top : 30 , fontSize : 26});
				numBox.css({right : 215});
				
			}
		},
	});	
	
	pageUp.click(function(){
		$.fn.fullpage.moveSectionUp();
	});
	
	pageDown.click(function(){
		$.fn.fullpage.moveSectionDown();
	})
	
	
});
