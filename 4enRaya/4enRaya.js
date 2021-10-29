let contador = 0;
let estado = new Array(7);
let colocado = new Array(7);
let turno = 0;

for (var i = 0; i < 7; i++) {
	estado[i] = new Array(6);
	colocado[i] = new Array(6);
	for (var j = 0; j < 6; j++) {
		estado[i][j] = "blanco";
		colocado[i][j] = false;
	}
}

function pulsa(fila) {
	cambiaturno(fila);
}
function cambiaturno(fila){
	let co = "blanco" ;

	if (turno == 0){
		co = "red";
		dibujaCasilla(fila,co);
		turno = 1;
	}else{
		co = "yellow";
		dibujaCasilla(fila,co);
		turno = 0;
	}
}
function finPartida(){
	
}
function dibujaCasilla(fila,co){


	console.log(fila);
	console.log(colocado);
	console.log(estado);

	//let s = 605;	valor en la parte mas baja
	//let s = 495;	valor penultima
	// va de 110 en 110


	var c = document.getElementById("c"+fila);
	var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(55, 605, 50, 0, 2 * Math.PI);
		ctx.fillStyle=co;
		ctx.fill();

}
function pintaTablero(){

	for (var z = 1; z < 8; z++) {
		var c = document.getElementById("c"+z);
		var ctx = c.getContext("2d");
		for (var a = 55; a < 630; a=a+110) {
			ctx.beginPath();
			ctx.arc(55, a, 50, 0, 2 * Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
		}
	}
	
	

}
function comprobarColor(){
	
}
function comprobarColumna(){
	
}