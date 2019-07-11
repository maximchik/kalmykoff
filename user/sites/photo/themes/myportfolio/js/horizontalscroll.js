$(window).load(function(){
 
 //========================================================
 // Sets up scrolling functionality for next/prev buttons
 //========================================================
  function setSliders() {
		for (var sld in hrSliders) {			
			$('#bt-right-'+hrSliders[sld]).click(function() {
				var sliderId=this.id.replace('bt-right-','');
				var scrLeft=$('#slider-'+sliderId).scrollLeft();
				var slideStep=$('#slider-'+sliderId).width()*0.8;
				$('#slider-'+sliderId).animate({scrollLeft: scrLeft + slideStep}, 300);
				$('#bt-left-'+sliderId).removeClass('hidden');
				if ($('#slider-'+sliderId).scrollLeft()+$('#slider-'+sliderId).width()+slideStep >= $('#slider-'+sliderId)[0].scrollWidth) $('#bt-right-'+sliderId).addClass('hidden');

			});
			$('#bt-left-'+hrSliders[sld]).click(function() {
				var sliderId=this.id.replace('bt-left-','');
				var scrLeft=$('#slider-'+sliderId).scrollLeft();
				var slideStep=$('#slider-'+sliderId).width()*0.8
				$('#slider-'+sliderId).animate({scrollLeft: scrLeft - slideStep}, 300);
				$('#bt-right-'+sliderId).removeClass('hidden');
				if ($('#slider-'+sliderId).scrollLeft() <= slideStep) $('#bt-left-'+sliderId).addClass('hidden');
			});
		}
	} 
	setSliders();
 
});