$(function(){
	// 返回顶部按钮
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if(top > 100){
			$("#totop").fadeIn(500);
		}
		else{
			$("#totop").fadeOut(500);
		}
	});

	$("#totop").on('click',function(){
		$("body,html").animate({
			scrollTop : 0
		},500);
	});

	//雪花效果 有bug;
	// function snowbegin(x,y,z){
	// 	$.fn.snow({ 			
	// 		minSize: x,		
	// 		maxSize: y, 	
	// 		newOn: z	
	// 	});
	// }
	
	var timer = null;	
	var a = 0;
	var bodycolor = $("body").css('backgroundColor');
	var logocolor = $(".main_header .nav_left h1 a").css('color');
	var headercolor = $(".main_header").css('backgroundColor');
	function onoff(ele,num){
		$('.right_two .btn').eq(ele).on('click',function(){
			if(num == 0){
				$(this).css('backgroundColor',"#41F553")
					   .children('button').css("left",15);
				num = 1;
				if(ele == 0){
					$("body").css('backgroundColor','#2C2A2A');
					$(".main_header").css('backgroundColor','#3C3A3A');
				}
				else if(ele == 1){
						
				}
				else if(ele == 2){
						
				}
			}
			else {
				$(this).css('backgroundColor',"white")
					   .children('button').css("left",0);
				num = 0;
				if(ele == 0){
					$("body").css('backgroundColor',bodycolor);
					$(".main_header").css('backgroundColor',headercolor);
				}
				else if(ele == 1){
						
				}
				else if(ele == 2){
						
				}
			}	
		})
	}

	onoff(0,0);
	onoff(1,0);
	onoff(2,0);	
});