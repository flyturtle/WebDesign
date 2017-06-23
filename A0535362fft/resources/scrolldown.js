$(document).ready(function(){
$('#header_down').click(function(){
		$("html,body").animate({scrollTop: $(document).height()},1500);
	});
	});