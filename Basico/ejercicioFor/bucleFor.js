let elemDato;
let elemMensaje;
let listaNumeros;

window.onload = function() {
	elemDato = document.getElementById("dato");
	elemMensaje = document.getElementById("mensaje");
}


function ordenado() {
	let datos = elemDato.value.trim();
	let ordenados = true;

	elemMensaje.innerHTML = "";


	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length-1; i++) {
			if(listaNumeros[i]>listaNumeros[i+1]){
				ordenados = false;
			}
		}
		if(ordenados){
			elemMensaje.innerHTML = "Estan ordenados";
		}else{
			elemMensaje.innerHTML = "No estan ordenados";
		}
	}
}

function negativos(){
	let datos = elemDato.value.trim();
	let ordenados = true;
	let cont = 0;

	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length; i++) {
			if(listaNumeros[i] < 0){
				cont++
			}
		}

	elemMensaje.innerHTML = "Hay "+cont+" numeros negativos";

	}
}
function pares(){
	let datos = elemDato.value.trim();
	let ordenados = true;
	let pares = 0;
	let impares = 0;

	if(validarDatos(datos)){
		for (var i = 0; i < listaNumeros.length; i++) {
			if(listaNumeros[i]%2 == 0){
				pares++
			}else{
				impares++
			}
		}

	}
}
function primos(){
	let datos = elemDato.value.trim();
	let primo=true;

	if(validarDatos(datos)){
		for (var i = 2; i < listaNumeros[0]; i++) {
        	if (listaNumeros[0]%i==0){
         	   primo=false;
        	}mn
   		}

   		if(primo){
    		elemMensaje.innerHTML = "es primo";
    	}else{
			elemMensaje.innerHTML = "no es primo";
		}
	}
}


function validarDatos(ln) {

	if(ln != ""){

	 	listaNumeros = ln.split(' ');

	 	for (var i = 0; i < listaNumeros.length; i++) {
	 		if(isNaN(listaNumeros[i])){
	 			elemMensaje.innerHTML = "Uno o mas de los valores no es un número entero";
	 			return false;
	 		}
	 	}

	}else{
		elemMensaje.innerHTML = "No has introducido datos";
		return false;
	}
	return true;
}