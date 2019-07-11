$(window).load(function(){ 
	setTimeout(function() {	
		$('#ph').attr('href','whatsapp://send?phone=+7'+(926*10000000+23110*100+46));
		$('#phn').empty().append('+7 (9'+26+') '+(23110*100+46));
	}, 1000*10);
});

function openPhoto(url) {

	var photoSrc=$('#full-scr-photo');	
	History.pushState(null, null, "#");	
	$('#full-scr-photo-bcg').removeClass('hidden');
	photoSrc.removeClass('hidden');
	loadPhoto(url);
//	photoSrc.css({'backgroundImage': 'url('+url+')'});
	photoSrc.click(function() {
		closePhoto();
	});
	console.log(url);
}

function loadPhoto(url) {
	$('#full-scr-photo').css({'backgroundImage': 'url('+themePath+'../../../../../../img/spin.gif)', 'background-size':'56px 56px'});
//	$('#full-scr-photo').prepend('<img class="spin" src="'+themePath+'../../../../../../img/spin.gif"/>');
	$('#full-scr-photo').prepend('<img id="loadingImg" src="'+url+'" class="hidden"/>');
	$('#loadingImg').load(function() {
		$('#full-scr-photo').css({'backgroundImage': 'url('+url+')', 'background-size':'contain'});
//		$('#loadingImg').remove();
		$('#full-scr-photo').empty();
	});
	
}


function closePhoto() {
		$(".full-scr").remove();
		$('#full-scr-photo-bcg').addClass('hidden');
		$('#full-scr-photo').addClass('hidden');
		$('#full-scr-photo').css({'backgroundImage': 'none'});
}

	History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
//		var State = History.getState(); // Note: We are using History.getState() instead of event.state
//		History.back();
		closePhoto();
	});

// append('<img class="full-scr" src="'+url+'" alt=""/>')