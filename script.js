

$(document).ready(function(){
	$(".mainBox").hide();
	$(".contentSignup").hide();

	$(".contentLogin .info a").click(function(){
		$(".contentLogin").hide();
		$(".contentSignup").show();
	});

	$(".contentSignup .info a").click(function(){
		$(".contentSignup").hide();
		$(".contentLogin").show();
	});

	$(".button").click(function(){
		changeWebpage();
	});
});

function changeWebpage(){
	let $username = $("#login_name").val();
	$(".entryBox").remove();
	$(".mainBox").show();
	$(".mainBox .userGreeting h1").text("Hello, " + $username);
}
