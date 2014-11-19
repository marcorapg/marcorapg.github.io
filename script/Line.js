function Line (ctx, x, y, stopLetter) {
	this.ctx = ctx;
	this.xPos = x;
	this.yPos = y;
	this.stopLetter = stopLetter;
	this.stopHeight = 15;
	this.currentHeight = 0;
	this.stop = false;
	
	
	this.letters = [];
	
	this.drawLine = function()
	{	
		for(var m = 0; m < this.letters.length; m++)
		{
			this.letters[m].drawLetter(this.xPos, (20*m)+this.yPos);
		}
	};
	
	this.addLetter = function( )
	{
		if(this.currentHeight < this.stopHeight || this.stopLetter == "-")
		{
			var randomCharacter = characters[Math.floor((Math.random() * characters.length) + 0)];
			this.letters.push(new Letter(this.ctx, randomCharacter));
			
			this.currentHeight++;
		}
		else if(!this.stop)
		{
			this.letters.push(new Letter(this.ctx, this.stopLetter, true));
			this.stop = true;
		}
	};
}