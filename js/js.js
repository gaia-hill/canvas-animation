
var clientW;
var clientH;

var screen1;
var cxt1;

var screen_part1;
var cxt_part1;

var screen_part2;
var cxt_part2;

var screen_part3;
var cxt_part3;

var screen_part4;
var cxt_part4;

var screen_part5;
var cxt_part5;



$(document).ready(function(){
	
	clientW=$(window).width();
    clientH=$(window).height();

    screen1=document.getElementById("screen1");
    cxt1=screen1.getContext("2d");

    screen_part1=document.getElementById("screen1_part1");
    cxt_part1=screen_part1.getContext("2d");

    screen_part2=document.getElementById("screen1_part2");
    cxt_part2=screen_part2.getContext("2d");

    screen_part3=document.getElementById("screen1_part3");
    cxt_part3=screen_part3.getContext("2d");

    screen_part4=document.getElementById("screen1_part4");
    cxt_part4=screen_part4.getContext("2d");

    screen_part5=document.getElementById("screen1_part5");
    cxt_part5=screen_part5.getContext("2d");
    
    
    var img1=new Image();
	img1.src="img/ieb.png";
	img1.onload=function(e){
		cxt_part2.drawImage(img1,0,0,200,200);
	}
	
	var img2=new Image();
	img2.src="img/360b.png";
	img2.onload=function(e){
		cxt_part3.drawImage(img2,0,0,200,200);
	}
	
	var img3=new Image();
	img3.src="img/2345b.png";
	img3.onload=function(e){
		cxt_part4.drawImage(img3,0,0,200,200);
	}
	
	var img4=new Image();
	img4.src="img/before.png";
	img4.onload=function(e){
		cxt_part5.drawImage(img4,0,0,200,200);
	}

	screen1.height=clientH;
	screen1.width=clientW;
	
	play();
});

function play(){
	screen_part_one();
}

function screen_part_one(){
	cxt_part1.strokeStyle="#fff";
	cxt_part1.font="100px 微软雅黑";
	cxt_part1.lineWidth="1";
	var text="你使用的浏览器是什么？";
	var i=0;
	var interval = setInterval(function(){
		if(i<=text.length){
			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
	     	cxt_part1.strokeText(text.substring(0,i)+"_",0,100,screen_part1.width);
	     	setTimeout(function(){
	     		cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
	     		cxt_part1.strokeText(text.substring(0,i),0,100,screen_part1.width);
	     		setTimeout(function(){
	     			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
	     			cxt_part1.strokeText(text.substring(0,i)+"_",0,100,screen_part1.width);
	     			i++;
	     		},100);
	     	},100);
		}else{
			clearInterval(interval);
			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
	     	cxt_part1.strokeText(text,0,100,screen_part1.width);
	     	
	     	setTimeout(function(){
	     		$("#screen1_part1").fadeOut("slow");
	     		
	     		setTimeout(function(){
	     			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
	            	cxt_part1.strokeText("难道还是...",0,100,screen_part1.width);
	            	$("#screen1_part1").fadeIn("slow");
	            	setTimeout(function(){
		     			document.getElementById("screen1_part2").style.top="600px";
		     			setTimeout(function(){
		     				document.getElementById("screen1_part3").style.top="600px";
		     				setTimeout(function(){
			     				document.getElementById("screen1_part4").style.top="600px";
			     				
			     				setTimeout(function(){
                                    var text2="但是,你知道吗？";
		     						i=0;
                                    interval = setInterval(function(){
		     							if(i<=text2.length){
											cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
									     	cxt_part1.strokeText(text2.substring(0,i)+"_",0,100,screen_part1.width);
									     	setTimeout(function(){
									     		cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
									     		cxt_part1.strokeText(text2.substring(0,i),0,100,screen_part1.width);
									     		setTimeout(function(){
									     			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
									     			cxt_part1.strokeText(text2.substring(0,i)+"_",0,100,screen_part1.width);
									     			i++;
									     		},100);
									     	},100);
										}else{
											clearInterval(interval);
											cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
		                                	cxt_part1.strokeText(text2,0,100,screen_part1.width);
		                                	setTimeout(function(){
		                                		cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
		                                		setTimeout(function(){
		                                			document.getElementById("screen1_part2").style.top="100px";
		                                			document.getElementById("screen1_part3").style.top="100px";
		                                			document.getElementById("screen1_part4").style.top="100px";
		                                			
		                                			document.getElementById("screen1_part2").style.left="60%";
		                                			document.getElementById("screen1_part3").style.left="60%";
		                                			document.getElementById("screen1_part4").style.left="60%";
		                                			
		                                			setTimeout(function(){
													    document.getElementById("screen1_part5").style.left="60%";
													    var flag1=0;
													    i=0;
		                                				interval=setInterval(function(){
		                                					if(i<7){
			                                					if(flag1==0){
			                                						document.getElementById("screen1_part5").style.top="600px";
			                                						flag1=1;
			                                					}else{
			                                						document.getElementById("screen1_part5").style.top="400px";
			                                						flag1=0;
			                                					}
			                                					i++;
		                                					}else{
		                                						clearInterval(interval);
		                                						document.getElementById("screen1_part5").style.top="600px";
		                                					}
		                                				},250);
		                                			},500);
		                                			
		                                			setTimeout(function(){
		                                				document.getElementById("screen1_part2").style.top="500px";
			                                			document.getElementById("screen1_part3").style.top="350px";
			                                			document.getElementById("screen1_part4").style.top="200px";
			                                			setTimeout(function(){
			                                				var img5=new Image();
			                                				img5.src="img/tired.png";
			                                				cxt_part5.clearRect(0,0,screen_part5.width,screen_part5.height);
													   		img5.onload=function(e){
			                                					cxt_part5.drawImage(img5,0,0,200,200);
			                                				}
			                                			},1000);
		                                			},1000);
		                                			
		                                			setTimeout(function(){
		                                				var text3="程序猿都TNN的快要恶心死了...";
							     						var j=0;
							     						screen_part1.style.left="10%";
					                                    var interval2 = setInterval(function(){
							     							if(j<=text3.length){
																cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
														     	cxt_part1.strokeText(text3.substring(0,j)+"_",0,100,clientW);
														     	setTimeout(function(){
														     		cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
														     		cxt_part1.strokeText(text3.substring(0,j),0,100,screen_part1.width);
														     		setTimeout(function(){
														     			cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
														     			cxt_part1.strokeText(text3.substring(0,j)+"_",0,100,screen_part1.width);
														     			j++;
														     		},100);
														     	},100);
															}else{
																clearInterval(interval2);
																cxt_part1.clearRect(0,0,screen_part1.width,screen_part1.height);
														     	cxt_part1.strokeText(text3.substring(0,j),0,100,screen_part1.width);
															}
														},400);
		                                			},200);
		                                		},1000);
		                                	},500);
										}
									},400);
			     				},1500);
			     			},300);
		     			},300);
		     		},500);
	     		},1000);
	     	},300);
		}
	},400);
}
