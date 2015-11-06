
var $Batman= $('img[alt="Batman"]');

$Batman.addClass('shown')
	$('.name').text('Batman');

$('button.next').on('click', function(){
	$('.shown').next().addClass('shown')
	$('.shown').prev().removeClass('shown')


});

//SOLUTION

//$('.gallery .hero:first-child').addClass('shown');
//$('.next').on('click', function (e){
	//if ($('.shown').is('.lastchild')){
		//$('.shown').removeClass('shown');
		//$('.gallery .hero:first-child').addClass('shown')


	//}
	//else {
		//$('.shown').removeClass('shown').next().addClass('shown');
	//}

	//var caption= $('.shown').attr('title');
	//$('.name').text(caption).show().fadeOut(1000);
//});