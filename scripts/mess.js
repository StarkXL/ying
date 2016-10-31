$(function(){
	$.ajax({
		type:'GET',
		url:"data/main.json",
		dataType:'json',		
		success:function(data){	
			// 给主页面添加li		
			$.each(data.myindex,function(i){
				var time = data.myindex[i].time;
				var head = data.myindex[i].head;
				var say = data.myindex[i].tosay;
				var li = $("<li></li>");
				var a = $("<a href='javascript:'></a>");
				var time = $("<span class='time'>"+time+"</span>");
				var head = $("<h2>"+head+"<h2>");
				var say = $("<p>"+say+"</p>");
				time.appendTo(a);
				head.appendTo(a);
				say.appendTo(a);
				a.appendTo(li);
				li.appendTo($(".main_center .main_left ul"));
			});

			//获取li的数量显示在右侧多有文章后
			$(".main_right .right_one ul span").eq(0).text($(".main_left li").length);	
			//给每个li绑定click方法
			var mainli = $(".main_center .main_left ul li");
			mainli.each(function(i){
				$(this).on('click',function(){
					$.ajax({
						type:"GET",
						url:"data/blog.json",
						dataType:"json",
						success:function(data){
							$("section").html(" ").removeClass();
							$("title").text(data.myblog[i].title);
							$(".main_header .nav_center .nav_right ul li a").eq(0).removeClass();
							var header = $("<div class='header'><h1>"+data.myblog[i].head+"</h1><h3>"+data.myblog[i].time+"</h3></div>");
							var content = $("<div class='content'></div>");
							$.each(data.myblog[i].info,function(index,ele){
								var chunk = $("<div class='chunk'><h1>"+data.myblog[i].info[index].smhead+"</h1><p>"+data.myblog[i].info[index].sminfo+"</p></div>");
								chunk.appendTo(content);
							});

							var divimg = $("<div class='img'></div>");
							var img = $("<img>");
							img.attr("src",data.myblog[i].img[0].src);
							img.appendTo(divimg);
							divimg.appendTo(content);
							header.appendTo($("section"));
							content.appendTo($("section"));					
						},
						error:function(){
							console.log("数据获取失败")
						}
					})
				})
			});
		},
		error:function(){
			console.log('li获取数据失败');
		}
	});

	$.ajax({
		type:'GET',
		url:"data/music.json",
		dataType:"json",
		success:function(data){
			//异步加载音乐列表
			$.each(data.mymusic,function(i){
				var lis = $("<li class='music'></li>");
				lis.text(data.mymusic[i].name);
				var onoff = $(
						"<span class='btn'><button></button><em></em></span>"
					);
				var musicurl = $("<audio class='audio' style='display:none'></audio>");
				musicurl.attr("src",data.mymusic[i].link);
				// data.mymusic[i].name.appendTo(lis);
				onoff.appendTo(lis);
				musicurl.appendTo(lis);
				lis.appendTo($(".right_two ul"));
			});

			//给加载的音乐列表添加dom操作
			(function playmusic(){
				var audio =  document.getElementsByTagName('audio');
				// var num = 0;
				$.each($(".music .btn"),function(index,ele){
					$(this).attr('num',0);
					$(".music .btn").eq(index).on('click',function(){
						if($(this).attr('num') == 0 ){
							for(var j=0; j<$(".music .btn").length; j++){
								$(".music .btn").eq(j).css('backgroundColor',"white").attr('num',0)
								.children('button').css("left",0);
								audio[j].pause(); 
							}
							$(this).css('backgroundColor',"#41F553")
							.children('button').css("left",15);	
							audio[index].play();
							$(this).attr('num',1);
						}
						else {
							$(this).css('backgroundColor',"white")
							.children('button').css("left",0);
							audio[index].pause();	
							$(this).attr('num',0);   
						}	   
					});
				});
			})()
		},
		error:function(){
			console.log("music数据读取错误");
		}
	});
});



	