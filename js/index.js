$(document).ready(function(){
	$("button").click(function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	$(window).scroll(function(){
		if($(window).scrollTop() > $(window).height()){
			$("button").fadeIn();
		}
		else{
			$("button").fadeOut();
		}
	})
			
})