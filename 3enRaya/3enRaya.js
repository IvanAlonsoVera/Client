window.onload = cargaEntorno;

let ctx;
let contador;

function cargaEntorno(){

	let mc = document.getElementById("miCanvas");
	ctx = mc.getContext("2d");
}
function cambiarColor(){

	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	ctx.fillStyle = "rgb("+r+","+g+","+b+")";
	ctx.fillRect(100, 100, 200, 200);
}
function pintar(contador){
	let id = document.getElementById("miCanvas"+contador);
	if(!pintado()){
		if (turnoPar===true){
			pintaCirculo()
		}else{
			pintaDiagonales()
			
		}
		pasaTurno();
	}
}
function pintaDiagonales(){
	ctx.lineWidth = 5;
	ctx.moveTo(0,0);
	ctx.lineTo(399,399);
	ctx.stroke();

	ctx.moveTo(0,399);
	ctx.lineTo(399,0);
	ctx.stroke();

}
function pintaCirculo(){
	ctx.beginPath();
	ctx.arc(200,200, 195, 0, 2 * Math.PI);
	ctx.stroke();
}
