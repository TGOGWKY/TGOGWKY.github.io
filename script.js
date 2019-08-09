$(document).ready(function(){
	$(".contentSignup").hide();

	$(".contentLogin .info a").click(function(){
		$(".contentLogin").hide();
		$(".contentSignup").show();
	});

	$(".contentSignup .info a").click(function(){
		$(".contentSignup").hide();
		$(".contentLogin").show();
	});
});
