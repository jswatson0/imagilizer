$( document ).ready(function() {
	
	// check to see if file is linked correctly
	// alert( "ready!" );

	// place img with .active class in panel div 
	// $(window).load(function(){
	// 	$('#sidebar img').first().addClass('active').clone().appendTo('#panel');
	// 	$('#panel img').removeAttr('width');
	// });
	
	// fade out img in panel and fadeIn img from sidebar when clicked
	// $('#sidebar img').click(function() {
	// 	$('#panel img').first().fadeOut("slow", function() {
	// 		$(this).remove();
	// 	});
	// 	$('.active').removeClass('active');
	// 	$(this).addClass('active').clone().appendTo($('#panel')).hide();	
	// 	$('#panel img').delay(500).fadeIn("slow");
	// });

	// cycle through imgs in #panel div
	$('ul#slides').cycle({
		fx: 'fade',
		// after: function(){
			// $('#imageCaption').html($('#slides li:visible img').data('caption'));
	});
});