function inittable() {

	var maxX=10, maxY=10;

	var i=0,j=0;

	var theTable = document.getElementById('board');

	if ( theTable==null) alert("board not found");

	while  (  j < maxY ) {

		theTable.tBodies[0].appendChild(document.createElement('tr'));
		
		//var xx = document.createElement("zzz");
		
		while  (  i < maxY ) {
			
			var y = document.createElement('td');
			y.appendChild(document.createTextNode('col '+i+ " row " + j));
			theTable.tBodies[0].rows[j].appendChild(y);

			i++; //		
		}
		j++;
		i=0;
	}

}

