	//var context = document.getElementById("canvasId");
	var context = document.getElementById("canvasId").getContext("2d");
	
	var width = 225;  // Triangle Width
	var height = 205; // Triangle Height
	var padding = 20;
	
	// Draw a path
	context.beginPath();
	context.lineWidth=1;
	context.moveTo(padding + width/2, padding);        // Top Corner
	context.lineTo(padding + width, height + padding); // Bottom Right
	context.lineTo(padding, height + padding);         // Bottom Left
	//context.closePath();
	
	
	context.stroke();
	
	context.beginPath();
	// horizontal line 
	context.moveTo ( padding-10, height/2);
	context.lineTo( padding+width+10, height/2);
	//context.lineStyle = #555;
	
	context.lineWidth=3;
	context.stroke();

//	lineWidth [ = value ]
//
//	This property returns the current line width and can be set, to change the line width.
//	2 	lineCap [ = value ]
//
//	This property returns the current line cap style and can be set, to change the line cap style. The possible line cap styles are butt, round, and square
//	3 	lineJoin [ = value ]
//
//	This property returns the current line join style and can be set, to change the line join style. The possible line join styles are bevel, round, and miter.
//	4 	miterLimit [ = value ]
//
//	This property returns the current miter limit ratio and can be set, to change the miter limi
	// lower horiz line
	context.moveTo ( padding-10, height/2+10);
	context.lineTo( padding+width+10, height/2+10);
	//context.lineStyle = #555555;
	context.stroke();

	
	// Fill the path
	//context.fillStyle = "#ffc821"; // yellowish
	//context.fillStyle = "#336699";// blue ish
	//context.fillStyle = "#ff0000";// red
	//context.fillStyle = "#00ee00";// lt green
	context.fillStyle = "#11cc77";// olive
	//context.fill();

	
	padding=30;
	width=200;
	height=175;
	
//	context.beginPath();
//	context.moveTo(padding + width/2, padding);        // Top Corner
//	context.lineTo(padding + width, height + padding); // Bottom Right
//	context.lineTo(padding, height + padding);         // Bottom Left
//	context.closePath();
//	
//	context.fillStyle = "#111111";// 
//	context.fill();

