var upperCase = ["0065", "0066", "0067", "0068", "0069", "0070", "0071", "0072", "0073", "0074", "0075", "0076", "0077", "0078",
				 "0079", "0080", "0081", "0082", "0083", "0084", "0085", "0086", "0087", "0088", "0089", "0090" //A-Z
				];
				
var characters = ["0097", "0098", "0099", "0100", "0101", "0102", "0103", "0104", "0105", "0106", "0107", "0108", "0109", "0110",
				  "0111", "0112", "0113", "0114", "0115", "0116", "0117", "0118", "0119", "0120", "0121", "0122", //a-z
			      "0048", "0049", "0050", "0051", "0052", "0053", "0054", "0055", "0056", "0057", // 0-9
				  "0036", "0043", "0045", "0042", "0047", "0061", "0037", "0035", "0038", "0095", "0040", "0041", "0044", "0046",
	              "0059", "0058", "0034", "0039", "0063", "0033", "0092", "0124", "0123", "0125", "0060", "0062", "0091", "0093",
				  "0094", "0126" // kana
				  ]; 

function Letter (ctx, character, fixed){
	this.ctx = ctx;
	this.char = character;
	this.status = 120;
	this.fixed = false;
	
	this.drawLetter = function (x, y) 
	{
		if(!fixed)
		{
			this.ctx.globalAlpha = this.status/100 > 0 ? this.status/100 : 0;
			
			setLetterColor(this.ctx, this.status);
			
			this.ctx.fillText(String.fromCharCode(this.char), x, y);
			this.status = this.status - 1;
		} 
		else
		{
			this.ctx.globalAlpha = 1;
			ctx.fillStyle = '#FFFFFF';
			ctx.shadowColor = '#FFFFFF';
			ctx.shadowBlur = 30;
			this.ctx.fillText(this.char, x, y);
		}
	};
}

function setLetterColor(ctx, status)
{
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;		
		
		if(status > 118){
			ctx.fillStyle = '#FFFFFF';
			ctx.shadowColor = '#FFFFFF';
			ctx.shadowBlur = 30;
		}
		else if (status > 116){
			ctx.fillStyle = '#FFFFCC';
			ctx.shadowColor = '#FFFFCC';
			ctx.shadowBlur = 20;	
		}
		else if (status > 114){ 
			ctx.fillStyle = '#FFFF99';
			ctx.shadowColor = '#FFFF99';
			ctx.shadowBlur = 15;			
		}
		else if (status > 112){
			ctx.fillStyle = '#FFFF66';
			ctx.shadowColor = '#FFFF66';
			ctx.shadowBlur = 10;			
		}
		else if (status > 110){ 
			ctx.fillStyle = '#FFFF33';
			ctx.shadowColor = '#FFFF33';
			ctx.shadowBlur = 5;			
		}
		else{
			ctx.fillStyle = '#FFFF00';
			ctx.shadowColor = '#FFFF00';
			ctx.shadowBlur = 5;	
		}
}