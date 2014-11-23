function Line (ctx, x, delay) {
	this.ctx = ctx;
	this.xPos = x;
	this.delay = delay;
	
	this.letters = [];
	
	this.drawLine = function()
	{	
		for(var m = 0; m < this.letters.length; m++)
		{
			this.letters[m].drawLetter(this.xPos, (20*m));
		}
	};
	
	this.addLetter = function( )
	{
		var randomCharacter = characters[Math.floor((Math.random() * characters.length))];
		this.letters.push(new Letter(this.ctx, randomCharacter));
	};
}