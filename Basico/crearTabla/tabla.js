function crearT() {
	//vamos a crear la tabla

	var tabla = "<table border='1px'>";

	for (var i = 0 ; i < 10; i++) {
 		tabla=tabla+"<tr>";

 		for (var j = 0 ; j < 10; j++){
			tabla=tabla+"<td>"+i+"-"+j+"</td>";
		}
		tabla=tabla+"<tr>";
	}

	tabla=tabla+"</table>";

	document.write(tabla);
	console.log(tabla);
}