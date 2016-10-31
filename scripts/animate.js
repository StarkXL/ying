	// 返回顶部按钮
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		if(top > 180){
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
	
	//给右侧第二个列表添加按钮点击变换效果
	(function turn (){
		var timer = null;	
		var a = 0;
		var bodycolor = $("body").css('backgroundColor');
		var logocolor = $(".main_header .nav_left h1 a").css('color');
		var headercolor = $(".main_header").css('backgroundColor');
		function onoff(ele,num){
			$('.right_two .btn').eq(ele).on('click',function(){
				var that = $(this);
				if(num == 0){
					$(this).css('backgroundColor',"#41F553")
						   .children('button').css("left",15);
					num = 1;
					if(ele == 0){
						$("body").css('backgroundColor','#2C2A2A');
						$(".main_header").css('backgroundColor','#3C3A3A');
					}
					else if(ele == 1){
						$(".music").slideDown(300);	
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
						$(".music").slideUp(300);	
					}
				}	
			})
		}	
			for(var m=0; m<2; m++){
				onoff(m,0);
			}
	})();

	// (function playmusic(){
	// 	var audio =  document.getElementsByTagName('audio');
	// 	$.each($(".music .btn"),function(index,ele){
	// 		$(".music .btn").eq(index).on('click',function(){
	// 			for(var j=0; j<$(".music .btn").length; j++){
	// 				$(".music .btn").eq(j).css('backgroundColor',"white")
	// 					   .children('button').css("left",0);
	// 				audio[j].pause();   
	// 			}
	// 			$(this).css('backgroundColor',"#41F553")
	// 				   .children('button').css("left",15);				
	// 			audio[index].play();	   
	// 		});
	// 	});
	// })()

	// var lisnum = $(".main_left ul li");
	// // alert(lisnum.length);
	// $(".main_right .right_one ul span").eq(0).text($(".main_left li").length);
	// // alert($(".main_left ul li").length);


	// var mainli = $(".main_center .main_left ul li");
	// mainli.each(function(i){
	// 	$(this).on('click',function(){
	// 		// alert(i);
	// 		$.ajax({
	// 			type:"POST",
	// 			url:"data/blog.json",
	// 			dataType:"json",
	// 			success:function(data){
	// 				$("section").html(" ").removeClass();
	// 				$("title").text(data.myblog[i].title);
	// 				$(".main_header .nav_center .nav_right ul li a").eq(0).removeClass();
	// 				var header = $("<div class='header'><h1>"+data.myblog[i].head+"</h1><h3>"+data.myblog[i].time+"</h3></div>");
	// 				var content = $("<div class='content'></div>");
	// 				$.each(data.myblog[i].info,function(index,ele){
	// 					var chunk = $("<div class='chunk'><h1>"+data.myblog[i].info[index].smhead+"</h1><p>"+data.myblog[i].info[index].sminfo+"</p></div>");
	// 					chunk.appendTo(content);
	// 				});

	// 				var divimg = $("<div class='img'></div>");
	// 				var img = $("<img>");
	// 				img.attr("src",data.myblog[i].img[0].src);
	// 				img.appendTo(divimg);
	// 				divimg.appendTo(content);
	// 				header.appendTo($("section"));
	// 				content.appendTo($("section"));					
	// 			}
	// 		})
	// 	})
	// });

	// $(".music .btn").on('click',function(){
	// 	console.log(111);
	// })
