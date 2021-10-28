let parrafo;
function crearTabla() {
	let filas = document.getElementById("filas").value;
	let columnas = document.getElementById("columna").value;
	let relleno = document.getElementById("relleno").value;

	let salida = "<table>";

	// alert("filas:"+filas+"columas:"+columnas+"relleno:"+relleno);

	for (var i = 0; i < filas; i++) {
		salida = salida + "<tr>";
		for (var j = 0; j < columnas; j++) {
			salida = salida + "<td>"+relleno+"</td>";
		}
		salida = salida + "</tr>";
		
	}

	salida = salida + "</table>";

	document.getElementById("tablaDinamica").innerHTML = salida;

	//crear los elementos directamente
	let divTD2 = document.getElementById("tablaDinamica2");

	parrafo = document.createElement("p");

	divTD2.appendChild(parrafo);

	let elementosFila

	for (var i = 0; i < filas; i++) {
		elementosFila = document.createElement("tr");
		
	}

}
function rellenarParrafo() {
	if (parrafo !== undefined) {
		parrafo.innerHTML="en un lugar de la mancha";
		parrafo.style.color="red";

	}
}