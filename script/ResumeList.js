$.get( "http://rarolabs.com.br:88/alunos.json", function( data ) {
	$('#slideshow').html('');
	$.each(data, function( index, value ) {
		$('#slideshow').append(
			$([			
				"<div style='display:" + (index == 0 ? "block" : "none") + ";' id='slide" + index + "' class=''>",
					"<a href=" + data[index].link_html + ">",
						"<p class='quote'>" + data[index].nome + "</p>",
					"</a>",
					"<p class='credit'>" + data[index].mini_curriculo +"</p>",
				"</div>"				
			].join("\n"))
		);
	});
});

$(function () {
	$('#slideshow div:first-child').show(); // show first slide
		  
	$( "#forward" ).click(function() {
		$('#slideshow div:first-child').fadeOut(500).appendTo('#slideshow');
		
		setTimeout(function()
		{
			$('#slideshow div:first-child').fadeIn(500);
		}, 500);
	});

	$( "#backward" ).click(function() {
		$('#slideshow div:first-child').fadeOut(500);
		
		setTimeout(function()
		{
			$('#slideshow div:last-child').fadeIn(500).prependTo('#slideshow');
		}, 500);
	});	
});