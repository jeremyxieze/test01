// JavaScript Document
$(function(){
	if($(window).width()>640){
			$('html').css({fontSize:100});
		}else if($(window).width()<320){
			$('html').css({fontSize:50});
		}else{
			var rem = $(window).width()/6.4;
			$('html').css({fontSize:rem});
		};
		$(window).resize(function(){
			var rem = $(window).width()/6.4;
			$('html').css({fontSize:rem});
			if($(window).width()>640){
				$('html').css({fontSize:100});
			}else if($(window).width()<320){
				$('html').css({fontSize:50});
			}
		})
})

//$(function(){
//	if($(window).width()>640){
//			$('html').css({fontSize:10});
//		}else if($(window).width()<320){
//			$('html').css({fontSize:5});
//		}else{
//			var rem = $(window).width()/64;
//			$('html').css({fontSize:rem});
//		};
//		$(window).resize(function(){
//			var rem = $(window).width()/64;
//			$('html').css({fontSize:rem});
//			if($(window).width()>640){
//				$('html').css({fontSize:10});
//			}else if($(window).width()<320){
//				$('html').css({fontSize:5});
//			}
//		})
//	})