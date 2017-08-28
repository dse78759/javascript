var d_start = new Date().getTime();

var context = document.getElementById("canvasId").getContext("2d");

var maxwidth = 900; // Triangle Width
var maxheight = 700; // Triangle Height
var maxradius = 20;
var minradius = 10;

var x, y = 0; // coordinates of upper left corner

// chart of results:
// Triangles ms

for (var i = 0; i < 1000; i++) {
	var width = Math.round(Math.random() * maxwidth);
	var height = Math.round(Math.random() * maxheight);

	x = Math.round(Math.random() * maxwidth);
	y = Math.round(Math.random() * maxheight);
	var radius = (Math.random() * (maxradius-minradius)) + minradius;

	var startAngle = Math.random() *2;
	var endAngle = Math.random() *2;

	context.beginPath();
	context.arc(x, y, radius, startAngle*Math.PI, endAngle*Math.PI );

	var scolor = Math.round(Math.random() * 1000000) + 100000;
	context.strokeStyle = '#'+scolor; // sets line color 
	context.stroke();

	var color = Math.round(Math.random() * 1000000) + 100000;
	context.fillStyle = "#" + color;
	context.fill();

}

var d_end = new Date().getTime();

var d_diff = d_end - d_start;

alert(" time diff: " + d_diff);
