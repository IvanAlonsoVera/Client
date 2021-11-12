window.onload = inicio;
let temporizadorCreaFila = -1;
let contaNumId = 0;

function inicio() {
	console.log("inicio");
	document.getElementById("tablaDatos").onclick=otraFila;
	document.getElementById("auto").onclick=auto;
	document.getElementById("parar").onclick=parar;
	document.getElementById("borrar").onclick=borrar;
}

function otraFila(){
	let cueTab = document.getElementById("cuerpotabla");

	let fila = document.createElement("tr");

	let celda0 = document.createElement("td");
	let celda1 = document.createElement("td");
	let celda2 = document.createElement("td");
	let celda3 = document.createElement("td");

	celda0.innerHTML = contaNumId;
	celda1.innerHTML = "juan";
	celda2.innerHTML = "garcia";
	celda3.innerHTML = "juan.garcia@gmail.com";

	fila.appendChild(celda0);
	fila.appendChild(celda1);
	fila.appendChild(celda2);
	fila.appendChild(celda3);

	cueTab.appendChild(fila);

	contaNumId++;
}
function auto() {
	if(temporizadorCreaFila == -1){
		temporizadorCreaFila = setInterval(otraFila,1000);
	}
}
function parar() {
	clearInterval(temporizadorCreaFila);
	temporizadorCreaFila = -1;
}
function borrar(){
	let cueTab = document.getElementById("cuerpotabla");

	let numeroElem = cueTab.childNodes.length;
	let ultimoElem = numeroElem-1;

	cueTab.removeChild(cueTab.childNodes[ultimoElem]);

	if(ultimoElem!=0){
		setTimeout(borrar,1000);
	}
	
}