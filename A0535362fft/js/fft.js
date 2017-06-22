$(document).ready(function(){
	var _headerbg_now = 1;
	var _length = $("#headerbg > div").length;
	
	$('#headerbg_now').text ("0" + _headerbg_now);
	$('#headerbg_count').text ("0" + _length);
		
	
	$("#header_next").click(function(){
		_headerbg_now = _headerbg_now + 1;
		if (_headerbg_now > _length) _headerbg_now = 1;
	$('#headerbg_now').text ("0" + _headerbg_now);	
	$("#headerbg").attr('class', 'n' + _headerbg_now);
	});
	
	$('#header_prev').click(function(){		
		_headerbg_now = _headerbg_now - 1;
		if (_headerbg_now < 1) _headerbg_now = _length;
	$('#headerbg_now').text ("0" + _headerbg_now);	 
	$("#headerbg").attr('class', 'n' + _headerbg_now).fadeOut( "slow" );
	});

	
});




 
 
