function separarletras() {
	
	let frase = document.getElementById('frase').value;

	if(frase!=""){
		//necesitamos
		//cuantas letras tiene la frase
		//recorrer las letras de una en una
		//poner cada letra en "salida1" con un salto de linea

		let nCar = frase.length;

		let fraseSeparada = "";

		for (var i = 0; i < nCar; i++) {
			fraseSeparada += frase[i]+'<br>';
		}

		document.getElementById('salida1').innerHTML = fraseSeparada;
		
	}else{
		alert("introduce una frase");
	}
}

function cuentaletras() {

	let frase = document.getElementById('frase').value;

	if(frase!=""){

		let nCar = frase.length;

		let contador = 0;

		for (var i = 0; i < nCar; i++) {
			if((frase[i] >= 'a' && frase[i] <= 'z') || (frase[i] >= 'A' && frase[i] <= 'Z')){
				contador++;
			}
		}

		document.getElementById('salida1').innerHTML = contador;
		
	}else{
		alert("introduce una frase");
	}
}

function vueltafrase() {
	
	let frase = document.getElementById('frase').value;

	if(frase!=""){
		//necesitamos
		//cuantas letras tiene la frase
		//recorrer las letras de una en una
		//poner cada letra en "salida1" con un salto de linea

		let nCar = frase.length;

		let fraseSeparada = "";

		for (var i = nCar-1; i >= 0; i--) {
			fraseSeparada += frase[i];
		}

		document.getElementById('salida1').innerHTML = fraseSeparada;
		
	}else{
		alert("introduce una frase");
	}
}