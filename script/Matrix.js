/* CONFIGURAÇÔES */

var ctx = document.getElementById("demo").getContext("2d"),
time = 0;

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.font = 'italic 15pt myFirstFont';
ctx.fillStyle = '#FFFF00';

var numberLines = 30;
var lines = [];
var word = "THE MATRIX";

for(var j = 0; j < numberLines/2; j++)
{
	var randomInterval = Math.floor((Math.random() * 500)) * -1;
	lines.push(new Line(ctx, j*18, randomInterval, "-"));
}

for(var j = numberLines/2, z = 0; j < (numberLines/2) + word.length; j++, z++)
{
	//var randomInterval = Math.floor((Math.random() * 500)) * -1;
	lines.push(new Line(ctx, j*18, 0, word[z]));
}

for(var j = (numberLines/2) + word.length; j < numberLines + word.length; j++)
{
	var randomInterval = Math.floor((Math.random() * 500)) * -1;
	lines.push(new Line(ctx, j*18, randomInterval, "-"));
}



/* INICIA LOOP */
loop();


/* FUNÇÕES */

function loop() {
	if(time % 1 == 0)
	{
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		for(var j = 0; j < numberLines; j++)
		{
			lines[j].drawLine();
		}		
	}
	
	if(time % 4 == 0)
	{
		for(var j = 0; j < numberLines; j++)
		{
			lines[j].addLetter();
		}		
	}
	time++;
	requestAnimationFrame(loop);
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     || 
		  function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
		  };
})();



