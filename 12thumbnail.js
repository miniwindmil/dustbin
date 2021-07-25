document.addEventListener("DOMContentLoaded", function(event) {
	//alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");
	
	
    targetImage.addEventListener("click", function() {
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        }else{
            targetImage.classList.add("small");        
        }
    });
	
 });
 //-------------------------------------------------
			var box = document.querySelector('.banner');
			var left = document.querySelector('.banner .left');
			var right = document.querySelector('.banner .right');
			var bannerList = document.querySelector('.banner .bannerList');
			
			var iconItems = document.querySelectorAll('.banner .iconList li');
			var bannerItem = document.querySelectorAll('.banner .bannerList li');
			var timeAll = 600; //走完一张图片所用时间
			var timeStep = 20; //每走一步的时间，其实就是定时器当中的时间
			var timer = null;
			var isMove = false;//专门针对多次点击
			var autoTimer = null;
			
			
			bannerList.style.left = -600 + 'px';//无缝之后，轮播图默认显示的不再是之前第一张而是之前的最后一张
			
			
			box.onmouseenter = function(){
				left.style.opacity = 1;
				right.style.opacity = 1;
				clearInterval(autoTimer);
				
			};
			box.onmouseleave = function(){
				left.style.opacity = 0;
				right.style.opacity = 0;
				autoRun();
			}
			
			
			right.onclick = function(){
				move(true);
			}
			
			
			left.onclick = function(){
				move(false);
			}
			
			
			
			function move(flag){
				//点击一次走的距离差是 -600
				//元素最终的位置，我们页知道
				
				
				//判断元素是否在移动
				//处理连续点击，元素叠加移动的bug
				if(isMove){
					return;//如果元素正在移动，就不再移动 直接返回，后面代码不执行；
				}
				
				
				isMove = true;
				
				
				setTimeout(function(){
					isMove = false;
				},600);
				
				
				
				if(typeof flag == 'boolean'){
					if(flag){
						var dis = -600;//每点一次走的距离
					}else{
						var dis = 600;
					}
				}else{
					var dis = flag - bannerList.offsetLeft;//点击小圆点传的是元素最终的位置，通过这个最终位置拿到移动的距离
				}
				
				
				
				//每点击一次元素一共要走的距离
				var lastDis = bannerList.offsetLeft + dis;//求元素最终的位置
				var step = dis/(timeAll/timeStep);//求每一步走的距离
				
				
				timer = setInterval(function(){
					var left = bannerList.offsetLeft + step;
					if(left == lastDis){
						clearInterval(timer);
						
						//加无缝逻辑：
						if(left == -3600){
							left = -600;
						}else if(left == 0){
							left = -3000;
						}
						
					}
					
					bannerList.style.left = left + 'px';
					
				},timeStep);
				
				
				//小圆点变色问题
				var index = Math.abs(lastDis / 600)  - 1;///  +4
				if(index < 0 ){
					index = 4;
				}
				
				
				for(var i = 0; i < iconItems.length; i++){
					iconItems[i].className = '';
				}
				
				iconItems[index%5].className = 'current';
				
				autoIndex = index%5 + 1;
				
			}
			
			
			
			//点击小圆点  移动到对应的图片
			
			for(var i = 0; i < iconItems.length; i++){
				iconItems[i].index = i;
				iconItems[i].onclick = function(){
					move((this.index + 1)*-600);
					
					autoIndex = this.index + 1; //更新自动轮播的图片下标  
				}
			}
			
			
			
			
			//自动轮播
			//定时器
			
			var autoIndex = 1;
			autoRun();
			function autoRun(){
				autoTimer = setInterval(function(){
					autoIndex++;
					move(autoIndex * -600);
					if(autoIndex == 6){
						autoIndex = 1;
					}
				},2000);
			}
//点击小圆点排他进行变色
			var iconList = document.querySelectorAll('.banner .iconList li');
			
			for(var i = 0; i < iconList.length; i++){
				iconList[i].onclick = function(){
					for(var j = 0; j < iconList.length; j++){
						iconList[j].className = '';
					}
					
					this.className = 'current';
				}
			}
				
		//------------------------------------------------------------
		//---------------------留言栏
		var inputNode = document.querySelector('input');
			inputNode.onfocus = function(){
				this.value = '(⊙o⊙)…请各位小伙伴输入修改意见或建议';
				this.style.width = '1000px';
				this.style.backgroundColor = 'red';
			}
			inputNode.onblur = function(){
				this.value = '沒沒沒錯呀';
				//以后只要是设置随机颜色,肯定用的是rgb去设置
				var red = Math.floor(Math.random()*256); 
				var green = Math.floor(Math.random()*256);
				var blue = Math.floor(Math.random()*256);
				this.style.backgroundColor = 'rgb('+ red +','+ green +','+ blue +')';
			}
			/*
			//给div添加获取焦点
			var box = document.querySelector('div');
			box.onfocus = function(){
				console.log(111);
				*/