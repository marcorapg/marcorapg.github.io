$(document).ready(function(){
	$.get( "http://rarolabs.com.br:88/alunos.json", function( data ) {
		$('#slideshow').html('');
		$.each(data, function( index, value ) {
			$('#slideshow').append(
				$([			
					"<div style='display:" + (index == 0 ? "block" : "none") + ";' id='slide" + index + "' >",
						"<a href='" + data[index].link_html + "'>",
							"<p class='name'>" + data[index].nome + "</p>",
						"</a>",
						"<p class='resume'>" + data[index].mini_curriculo +"</p>",
					"</div>"				
				].join("\n"))
			);
		});
		$('#leftName').text(data[data.length-1].nome);
		$('#rightName').text(data[1].nome)
	});
});

$(document).ready(function(){
	$('#slideshow div:first-child').show(); // show first slide
		  
	$( "#forward" ).click(function() {
		$('#slideshow div:first-child').fadeOut(500).appendTo('#slideshow');
		
		setTimeout(function()
		{
			$('#slideshow div:first-child').fadeIn(500);
			trocaNomes();
		}, 500);
	});

	$( "#backward" ).click(function() {
		$('#slideshow div:first-child').fadeOut(500);
		
		setTimeout(function()
		{
			$('#slideshow div:last-child').fadeIn(500).prependTo('#slideshow');
			trocaNomes();
		}, 500);
	});
	
	function trocaNomes() 
	{
		$('#leftName').text($('#slideshow div:last-child').find('p[class="name"]').text());
		$('#rightName').text($('#slideshow div:first-child').next().find('p[class="name"]').text());
	}
});