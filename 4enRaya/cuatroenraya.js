window.onload = cargaTablero;

//Variable para conseguir el contexto de los canvas
let ctx;

//Variable para saber a quien le toca, y si ha acabado la partida 
let turno = 0;
let finalPartida = false;

//Arays para guardar el estado de las posiciones, y si se ha colocado la ficha o no
let colocado = new Array(7);
let estado = new Array(7);

//Se hace un bucle for para crear un array bidimensional para guardar las columnas y las filas
for (i=0; i<7; i++) {

	//I = Columna y J = Fila

	colocado[i] = new Array (6);
	estado[i] = new Array (6);

	for (j=0; j<6; j++) {

		colocado[i][j] = false;
		estado[i][j] = "";

	}
}

function cargaTablero() {

	//Esto se ejecuta al iniciar el php por el window.onload de arriba
	//Se hace un bucle for para recorrer cada canvas del php

	for (i=0; i<6; i++) {

		for (j=0; j<7; j++) {

			//A cada canvas se le declara una variable casilla para obtener su id, y se le rellena un circulo blanco
			var casilla = "f"+(i+1)+"c"+(j+1);

			let mc = document.getElementById(casilla);

			ctx = mc.getContext("2d");

			ctx.beginPath();
			ctx.arc(50, 50, 45, 0, 2 * Math.PI);
			ctx.fillStyle = "#FFFFFF";
			ctx.fill();

		}
	}
	
}


function conseguirFila (casilla) {

	//Funcion para obtener la fila de la casilla, se consigue el atributo id (fXcX)
	//Se coge la posicion [1] donde tenemos el numero de fila

	let elemento = casilla.getAttribute("id");
	let array = elemento.split("");

	return array[1];
}

function conseguirColumna (casilla) {

	//Funcion para obtener la fila de la casilla, se consigue el atributo id (fXcX)
	//Se coge la posicion [3] donde tenemos el numero de fila

	let elemento = casilla.getAttribute("id");
	let array = elemento.split("");

	return array[3];
}

function juega(casilla) {

	//
	let cuentaTurnos = 0;

	if (!(finalPartida)) {

		if(turno==0){

			if (compruebaCasilla(casilla)){

				dibujaAmarillo(casilla);
				turno=1;
				cuentaTurnos++;

				if (comprobarVictoria("A",casilla)) {

					finalPartida = true;
					alert("FELICIDADES. Ha ganado el jugador amarillo");

				}

			}else{

				alert("Debes seleccionar otra casilla");
			}
		
		}else{
		
			if (compruebaCasilla(casilla)){

				dibujaRojo(casilla);
				turno=0;
				cuentaTurnos++;

				if (comprobarVictoria("A",casilla)) {

					finalPartida = true;
					alert("FELICIDADES. Ha ganado el jugador rojo");

				}


				comprobarVictoria("R",casilla);

			}else{

				alert("Debes seleccionar otra casilla");
			}

		}

	}else{

		alert("La partida ya ha acabado. Pulsa el boton de Reiniciar para volver a empezar");
	}

	if (cuentaTurnos == 42) {

		alert("EMPATE: Ningun jugador ha ganado");

	}
	

}


function dibujaAmarillo (casilla) {

	ctx = casilla.getContext("2d");

	ctx.beginPath();
	ctx.arc(50, 50, 45, 0, 2 * Math.PI);
	ctx.fillStyle = "#FFFF00";
	ctx.fill();	

	cambiarEstado(casilla);

}

function dibujaRojo (casilla) {

	ctx = casilla.getContext("2d");

	ctx.beginPath();
	ctx.arc(50, 50, 45, 0, 2 * Math.PI);
	ctx.fillStyle = "#FF0000";
	ctx.fill();

	cambiarEstado(casilla);

}


function compruebaCasilla (casilla) {

	let filaPrueba = (conseguirFila(casilla)-1);
	let columnaPrueba = (conseguirColumna(casilla)-1);
	let resultado = true;

	let comprobaciones = (colocado[columnaPrueba].length-1) - filaPrueba;
	let numPrueba = 5;

	if (colocado[columnaPrueba][filaPrueba]) {

		resultado = false;

	}

	if (comprobaciones != 0) {

		for (i=0; i<comprobaciones; i++) {

			if (!(colocado[columnaPrueba][numPrueba])) {

				resultado = false;

			}

			numPrueba--;

		}

	}

	return resultado;
	

}

function cambiarEstado (casilla) {

	let filaPrueba = (conseguirFila(casilla)-1);
	let columnaPrueba = (conseguirColumna(casilla)-1);

	colocado[columnaPrueba][filaPrueba] = true;

	if (turno==0) {

		estado[columnaPrueba][filaPrueba] = "A";

	}else{

		estado[columnaPrueba][filaPrueba] = "R";
	}


}

function comprobarVictoria (jugador,casilla) {

	let columnaPrueba = (conseguirColumna(casilla)-1);
	let filaPrueba = (conseguirFila(casilla)-1);
	let resultado = false;

	//VICTORIA POR COLUMNA

	if (estado[columnaPrueba][0] == estado[columnaPrueba][1] && estado[columnaPrueba][1] == estado[columnaPrueba][2] && estado[columnaPrueba][2] == estado[columnaPrueba][3] && estado[columnaPrueba][3] == jugador) {

		resultado = true;

	}else if (estado[columnaPrueba][1] == estado[columnaPrueba][2] && estado[columnaPrueba][2] == estado[columnaPrueba][3] && estado[columnaPrueba][3] == estado[columnaPrueba][4] && estado[columnaPrueba][4] == jugador) {

		resultado = true;

	}else if (estado[columnaPrueba][2] == estado[columnaPrueba][3] && estado[columnaPrueba][3] == estado[columnaPrueba][4] && estado[columnaPrueba][4] == estado[columnaPrueba][5] && estado[columnaPrueba][5] == jugador) {

		resultado = true;

	}

	//VICTORIA POR FILA

	if (estado[0][filaPrueba] == estado[1][filaPrueba] && estado[1][filaPrueba] == estado[2][filaPrueba] && estado[2][filaPrueba] == estado[3][filaPrueba] && estado[3][filaPrueba] == jugador) {

		resultado = true;
		
	}else if (estado[1][filaPrueba] == estado[2][filaPrueba] && estado[2][filaPrueba] == estado[3][filaPrueba] && estado[3][filaPrueba] == estado[4][filaPrueba] && estado[4][filaPrueba] == jugador) {

		resultado = true;


	}else if (estado[2][filaPrueba] == estado[3][filaPrueba] && estado[3][filaPrueba] == estado[4][filaPrueba] && estado[4][filaPrueba] == estado[5][filaPrueba] && estado[5][filaPrueba] == jugador) {

		resultado = true;


	}else if (estado[3][filaPrueba] == estado[4][filaPrueba] && estado[4][filaPrueba] == estado[5][filaPrueba] && estado[5][filaPrueba] == estado[6][filaPrueba] && estado[6][filaPrueba] == jugador) {

		resultado = true;

	}

	//VICTORIA POR DIAGONAL

	if (estado[0][2] == estado[1][3] && estado[1][3] == estado[2][4] && estado[2][4] == estado[3][5] && estado[3][5] == jugador) {

		resultado = true;

	}else if (estado[0][1] == estado[1][2] && estado[1][2] == estado[2][3] && estado[2][3] == estado[3][4] && estado[3][4] == jugador) {

		resultado = true;
		
	}else if (estado[1][2] == estado[2][3] && estado[2][3] == estado[3][4] && estado[3][4] == estado[4][5] && estado[4][5] == jugador) {

		resultado = true;
		
	}else if (estado[0][0] == estado[1][1] && estado[1][1] == estado[2][2] && estado[2][2] == estado[3][3] && estado[3][3] == jugador) {

		resultado = true;
		
	}else if (estado[1][1] == estado[2][2] && estado[2][2] == estado[3][3] && estado[3][3] == estado[4][4] && estado[4][4] == jugador) {

		resultado = true;
		
	}else if (estado[2][2] == estado[3][3] && estado[3][3] == estado[4][4] && estado[4][4] == estado[5][5] && estado[5][5] == jugador) {

		resultado = true;
		
	}else if (estado[1][0] == estado[2][1] && estado[2][1] == estado[3][2] && estado[3][2] == estado[4][3] && estado[4][3] == jugador) {

		resultado = true;
		
	}else if (estado[2][1] == estado[3][2] && estado[3][2] == estado[4][3] && estado[4][3] == estado[5][4] && estado[5][4] == jugador) {

		resultado = true;
		
	}else if (estado[3][2] == estado[4][3] && estado[4][3] == estado[5][4] && estado[5][4] == estado[6][5] && estado[6][5] == jugador) {

		resultado = true;
		
	}else if (estado[2][0] == estado[3][1] && estado[3][1] == estado[4][2] && estado[4][2] == estado[5][3] && estado[5][3] == jugador) {

		resultado = true;
		
	}else if (estado[3][1] == estado[4][2] && estado[4][2] == estado[5][3] && estado[5][3] == estado[6][4] && estado[6][4] == jugador) {

		resultado = true;
		
	}else if (estado[3][0] == estado[4][1] && estado[4][1] == estado[5][2] && estado[5][2] == estado[6][3] && estado[6][3] == jugador) {

		resultado = true;
		
	}

	//VICTORIA POR DIAGONAL INVERTIDA

	if (estado[3][5] == estado[4][4] && estado[4][4] == estado[5][3] && estado[5][3] == estado[6][2] && estado[6][2] == jugador) {

		resultado = true;

	}else if (estado[2][5] == estado[3][4] && estado[3][4] == estado[4][3] && estado[4][3] == estado[5][2] && estado[5][2] == jugador) {

		resultado = true;
		
	}else if (estado[3][4] == estado[4][3] && estado[4][3] == estado[5][2] && estado[5][2] == estado[6][1] && estado[6][1] == jugador) {

		resultado = true;
		
	}else if (estado[1][5] == estado[2][4] && estado[2][4] == estado[3][3] && estado[3][3] == estado[4][2] && estado[4][2] == jugador) {

		resultado = true;
		
	}else if (estado[2][4] == estado[3][3] && estado[3][3] == estado[4][2] && estado[4][2] == estado[5][1] && estado[5][1] == jugador) {

		resultado = true;
		
	}else if (estado[3][3] == estado[4][2] && estado[4][2] == estado[5][1] && estado[5][1] == estado[6][0] && estado[6][0] == jugador) {

		resultado = true;
		
	}else if (estado[0][5] == estado[1][4] && estado[1][4] == estado[2][3] && estado[2][3] == estado[3][2] && estado[3][2] == jugador) {

		resultado = true;
		
	}else if (estado[1][4] == estado[2][3] && estado[2][3] == estado[3][2] && estado[3][2] == estado[4][1] && estado[4][1] == jugador) {

		resultado = true;
		
	}else if (estado[2][3] == estado[3][2] && estado[3][2] == estado[4][1] && estado[4][1] == estado[5][0] && estado[5][0] == jugador) {

		resultado = true;
		
	}else if (estado[0][4] == estado[1][3] && estado[1][3] == estado[2][2] && estado[2][2] == estado[3][1] && estado[3][1] == jugador) {

		resultado = true;
		
	}else if (estado[1][3] == estado[2][2] && estado[2][2] == estado[3][1] && estado[3][1] == estado[4][0] && estado[4][0] == jugador) {

		resultado = true;
		
	}else if (estado[0][3] == estado[1][2] && estado[1][2] == estado[2][1] && estado[2][1] == estado[3][0] && estado[3][0] == jugador) {

		resultado = true;
		
	}

	return resultado;
}
