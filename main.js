$(document).ready(function(){
	$('.navbar-icon').click(function() {
		var index = $('.navbar-icon').index(this);
		if (index<1) return null;
		$('html').animate({
			scrollTop: $(".article-"+(5-index)).offset().top}, 'slow');
	});
	$('.navbar-title-shadow').click(function() {
		$('body').animate({
			scrollTop: $('body').offset().top}, 'slow');
	})

	var colorChanger = function(){
		var item = $(".article-2 > .body > .column > .text");
		var rbg = '#'+Math.floor((Math.random() * 256) + 1)*Math.floor((Math.random() * 256) + 1)*Math.floor((Math.random() * 256) + 1);
		$(".article-2 > .box").animate({backgroundColor: rbg, opacity: .3}, 500);
		$(".article-2 > .text").animate({color: rbg}, 500);
		$(".article-2 > .body > .column > .cap").delay(150).animate({color: rbg}, 500);
		$(".article-2 > .caption").animate({color: rbg,borderTopColor: rbg, borderLeftColor: rbg, borderRightColor: rbg, borderBottomColor: rbg,transition: '.5 ease-in-out'},500);
		item.each(function(i, elem){
			$(item[i]).delay(150*i).animate({color: rbg,fontWeight:'bold', transition: '.5 ease-in-out'},0);
			$(item[i]).children('img').delay(150*i).animate({ borderWidth: '2px',borderTopColor: rbg, borderLeftColor: rbg, borderRightColor: rbg, borderBottomColor: rbg,transition: '.5 ease-in-out'},0);
		});
	}
	setInterval(colorChanger, 3000);

	//	var sizeChanger = function(){
	//		var item = $(".article-3 > .body > .row");
	//		item.each(function(i, elem){
	//			$(elem).children('a').children('img').delay(150*i).animate({
	//				effect:'scale'}, 500)
	//		});
	//	}
	//	setInterval(sizeChanger, 1000);


	var visible = function(elem, check){
		var viewTop = $(window).scrollTop(),
			viewBottom = viewTop + $(window).height(),
			_top = $(elem).offset().top,
			_bottom = _top + $(elem).height(),
			compareTop = check === true ? _bottom : _top,
			compareBottom = check === true ? _top : _bottom;
		console.log(viewTop+' 1');
		console.log(viewBottom+' 2');
		console.log(_top+' 3');
		console.log(_bottom+' 4');
		return ((compareBottom <= viewBottom) && (compareTop));
	};

//		(function(){ 
//			$(window).scroll(function(event){
//				var icon = document.body.getElementsByTagName("*");
//				visible(icon,true);
//	//			for (i=0;i<icon.length;i++){
//	//				if (icon[i].tagName=='IMG'||icon[i].tagName=='A'){
//	//					if (visible(icon[i], true)) {
//	//						$(icon[i]).addClass('rotateCounter');
//	//					}
//	//					else
//	//						$(icon[i]).removeClass('rotateCounter');
//	//				}	
//	//			}
//				//			icon.each(function(i, elem){
//				//				if (elem.getAttribute('img')){
//				//					if (visible(icon, true)) {
//				//						icon.addClass('rotateCounter');
//				//						console.log(true);
//				//					}
//				//					else
//				//						icon.removeClass('rotateCounter');
//				//				}
//				//			});
//			});
//		})();
});
