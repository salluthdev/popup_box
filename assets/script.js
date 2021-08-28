$(document).ready(function()
{
	$('.click').click(function()
	{
		$('.popup_box').css({
			"opacity":"1", "pointer-events":"auto"
		});
	});
	$('.btn_no').click(function(){
		$('.popup_box').css({
			"opacity":"0", "pointer-events":"none"
		});
	});
});