function oculta() {
	let parr = document.getElementById("parrafo");
	let bot = document.getElementById("boton");

	if (parr.style.visibility=="hidden"){
		parr.style.visibility="visible";
		bot.innerHTML="Oculta";
	}else{
		parr.style.visibility="hidden";
		bot.innerHTML="Enseña";
	}
}
function drag () {
	
	let parr = document.getElementById("parrafo");

	if (parr.draggable) {
		parr.draggable=false;
	}else{
		parr.draggable=true;
	}
}
function separaLetras() {
	let frase= document.getElementById("frase").value;

	if(frase!=""){
		//cuantas letras tiene la frase
		//recorrer las letras de una en una
		//poner cada letra en "salida1" con un salto de linea

		let nCar = frase.length;

		let fraseSeparada = "";

		for (var i = 0; i < nCar; i++) {
			fraseSeparada += frase[i]+"<br>";
			
		}
		document.getElementById("salida1").innerHTML = fraseSeparada;

		console.log(nCar);
	}else{
		alert("introduce una frase");
	}
}
function cuentaLetras() {
	let frase= document.getElementById("frase").value;
	let cont = 0;

	for (var i = 0; i < frase.length; i++) {
		if ((frase[i] >= "a"&&frase[i] <= "z") || (frase[i] >= "A"&&frase[i] <= "Z")) {
			cont ++
		}
	}

	document.getElementById("salida1").innerHTML = cont
}
function vueltika() {
	let frase= document.getElementById("frase").value;

	for (var i = (frase.length-1); i >= 0; i--) {
		document.getElementById("salida1").innerHTML += frase[i] ;
	}
}
function buscar(){
	let frase= document.getElementById("frase").value;
	let buscar= document.getElementById("buscar").value;
	let posicion= frase.indexOf(buscar);

	if (frase !="" && buscar!="") {
		if (posicion === false) {
			document.getElementById("salida1").innerHTML = "no esta";
		}else{
			document.getElementById("salida1").innerHTML ="esta en la posicion "+posicion;
		}

	}
}