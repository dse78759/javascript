	var context = document.getElementById("canvasId").getContext("2d");
	
	context.beginPath();
	context.lineWidth=1;
	
	context.moveTo(20, 20);        // Top Corner
	context.bezierCurveTo(20,100,200,100,200,20);
	context.stroke();
	
//	-- bezier curve with one 'bezier point' above and one below it
	context.beginPath();
	context.lineWidth=1;
	context.moveTo(20, 50);        // Top Corner
	context.bezierCurveTo(20,0,200,100,200,50);
	context.stroke();

	
	// line at 40, 60, 80 to show how far the bend goes 
	context.beginPath();
	context.moveTo (20,40); 
	context.lineTo ( 200, 40);
	context.strokeStyle="#55aa00";
	context.stroke();
	
	context.beginPath();
	context.moveTo (20,60); 
	context.lineTo ( 200, 60);
	context.strokeStyle="#001199";
	context.stroke();
	
	context.beginPath();
	context.moveTo (20,80); 
	context.lineTo ( 200, 80);
	context.strokeStyle="#bb00bb";
	context.stroke();
	

