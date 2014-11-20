$.get( "http://rarolabs.com.br:88/alunos.json", function( data ) {
	$('.slideshow').html('');
	$.each(data, function( index, value ) {
		$('.slideshow').append(
			$([
				"<div style='display:" + (index == 0 ? "block" : "none") + ";' id='slide" + index + "' class='box'>",
					"<p class='quote'>" + data[index].nome + "</p>",
					"<p class='credit'>" + data[index].mini_curriculo +"</p>",
				"</div>"
			].join("\n"))
		);
	});
});

$(function () {
  $('.slideshow div').hide(); // hide all slides
  $('.slideshow div:first-child').show(); // show first slide
		  
	$( "#forward" ).click(function() {
		$('.slideshow div:first-child').fadeOut(2000)
									 .next('div')
									 .fadeIn(3000)
									 .end()
									 .appendTo('.slideshow');
	});

	$( "#backward" ).click(function() {
		$('.slideshow div:first-child').fadeOut(1000);
									 
		$('.slideshow div:last-child').fadeIn(3000).prependTo('.slideshow');

	});	
});