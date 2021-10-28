let turno = 0;

let tablero = [false,false,false,false,false,false,false,false,false];
let estado = ["","","","","","","","",""];

function pintar(casilla,i){

	if(!tablero[i]){
		if(turno==0){
			dibujaX(casilla);
			estado[i]="X";
			turno=1;
			console.log(estado);
		}else{
			dibujaO(casilla);
			estado[i]="O";
			turno=0;
		}
		tablero[i]=true;
	}else{
		alert("casilla ya jugada");		
	}
	if(finPartida()){
		alert("final de la partida");
	}
}
function dibujaX(casilla){
	let ctx = casilla.getContext("2d");

	ctx.lineWidth = 10;
	ctx.moveTo(0,0);
	ctx.lineTo(100,100);
	ctx.stroke();
	ctx.moveTo(100,0);
	ctx.lineTo(0,100);
	ctx.stroke();
}
function dibujaO(casilla){
	let ctx = casilla.getContext("2d");

	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.arc(50,50, 45, 0, 2 * Math.PI);
	ctx.stroke();
}
function finPartida(){
	let fin = false;

	if(estado[0]=="X" && estado[1]=="X" && estado[2]=="X"){
		fin = true;
	}
	if(estado[0]=="O" && estado[1]=="O" && estado[2]=="O"){
		fin = true;
	}
	if(estado[0]=="X" && estado[3]=="X" && estado[6]=="X"){
		fin = true;
	}
	if(estado[0]=="O" && estado[3]=="O" && estado[6]=="O"){
		fin = true;
	}
	if(estado[0]=="X" && estado[4]=="X" && estado[8]=="X"){
		fin = true;
	}
	if(estado[0]=="O" && estado[4]=="O" && estado[8]=="O"){
		fin = true;
	}
	if(estado[1]=="X" && estado[4]=="X" && estado[6]=="X"){
		fin = true;
	}
	if(estado[1]=="O" && estado[4]=="O" && estado[6]=="O"){
		fin = true;
	}
	if(estado[1]=="X" && estado[4]=="X" && estado[7]=="X"){
		fin = true;
	}
	if(estado[1]=="O" && estado[4]=="O" && estado[7]=="O"){
		fin = true;
	}
	if(estado[2]=="X" && estado[4]=="X" && estado[6]=="X"){
		fin = true;
	}
	if(estado[2]=="O" && estado[4]=="O" && estado[6]=="O"){
		fin = true;
	}
	if(estado[3]=="X" && estado[4]=="X" && estado[5]=="X"){
		fin = true;
	}
	if(estado[3]=="O" && estado[4]=="O" && estado[5]=="O"){
		fin = true;
	}
	if(estado[5]=="X" && estado[6]=="X" && estado[7]=="X"){
		fin = true;
	}
	if(estado[5]=="O" && estado[6]=="O" && estado[7]=="O"){
		fin = true;
	}
	return fin;
}