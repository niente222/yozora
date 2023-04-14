
(function($) {
	$(document).ready(function() {
		for(var i=0;i<250;i++){
			var posX = Math.random() * window.innerWidth * 0.93 + 'px';
			var posY = Math.random() * window.innerHeight + 'px';
			var animDuration = Math.random() * 1.2 + 's';
			var animRan = Math.random() * 3;
			var animPattern;
			
			if(animRan < 1){
				animPattern = 'starLight1';
			}else if(animRan < 2){
				animPattern = 'starLight2';
			}else{
				animPattern = 'starLight3';
			}
			var star = $('<div class="star1"></div>').css({'top': posY,'left':posX,'animation-duration': animDuration,'animation-name':animPattern});
			$('body').prepend(star);
		}
		
		for(var i=0;i<10000;i++){
			setTimeout(function(){
				var posX = Math.random() * window.innerWidth * 0.93 + 'px';
				var posY = Math.random() * window.innerHeight * 0.8 + 'px';
				
				var animRan = Math.random() * 3;
			var animPattern;
			
			if(animRan < 1){
				animPattern = 'shootingStar1';
			}else if(animRan < 2){
				animPattern = 'shootingStar2';
			}else{
				animPattern = 'shootingStar3';
			}
			
			var shoothing = $('<div class="shoothing"></div>').css({'top': posY,'left':posX,'animation-name':animPattern});
			$('body').prepend(shoothing);
			},250 * i);
		}
			
		$('html').click(function() {
			var posX = Math.random() * window.innerWidth * 0.93 + 'px';
			var posY = Math.random() * window.innerHeight * 0.8 + 'px';
			
			var animRan = Math.random() * 3;
			var animPattern;
			
			if(animRan < 1){
				animPattern = 'shootingStar1';
			}else if(animRan < 2){
				animPattern = 'shootingStar2';
			}else{
				animPattern = 'shootingStar3';
			}
			
			var shoothing = $('<div class="shoothing"></div>').css({'top': posY,'left':posX,'animation-name':animPattern});
			$('body').prepend(shoothing);
		});
	});
})(jQuery);