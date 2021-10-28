let contador = 0;


function turno(){

}
function finPartida(){
	
}
function dibujaCasilla(){
	
}
function pintaTablero(){
	for (var j = 1; j < 8; j++) {
		var c = document.getElementById("c"+j);
		var ctx = c.getContext("2d");
		for (var i = 55; i < 630; i=i+110) {
			ctx.beginPath();
			ctx.arc(55, i, 50, 0, 2 * Math.PI);
			ctx.fillStyle="white";
			ctx.fill();
		}
	}
	
	

}
function comprobarColor(){
	
}
function comprobarColumna(){
	
}