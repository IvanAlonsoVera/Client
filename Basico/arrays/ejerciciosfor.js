
window.load=inicio;
//funcion de inicio
function inicio(){

}

//funcion para comprobar que el primer numero es el mayor

function primeroMayor(){
	let numeros = document.getElementsByClassName("numeros");
	const listaNumeros =[];
	let salida="";
   
   //guardar los valores en el  array listaNumeros

   for (var i = 0; i < numeros.length; i++) {
	     	listaNumeros.push(numeros[i].value.trim());
	    }

	if(validarInputs(listaNumeros)){

			let correcto =true;

			//comprobar que el primer numero es el mayor
			for (var i = 1; i < listaNumeros.length; i++) {
				if(Number.parseInt(listaNumeros[0]) < Number.parseInt(listaNumeros[i])){
					correcto=false;
			}
		}
			if(correcto){
				salida="<ul>";
				for (var i = 0; i < listaNumeros.length; i++) {
					salida += "<li>"+listaNumeros[i]+"-</li>";
				}
				salida += "</ul>";
				document.getElementById("contenedor").innerHTML = salida;
			}else{
				document.getElementById("contenedor").innerHTML = "Error en el primer numero";
			}


    }else{
      	document.getElementById("contenedor").innerHTML = "Error en los numeros";
    }

}

	// fin de primeroMayor

	//funcion para validar que son 5 numeros
	function validarInputs(ln){
		let respuesta = true;

		for (var i = 0; i < ln.length; i++) {
			//is NaN is not a number
			if(isNaN(ln[i])||(ln[i]=="")){
				respuesta  = false;
			}
		}
	return respuesta;
}
	//fin de funcion para validar que son 5 numeros


//funcion que comprueba que estan ordenados
function ordenados(){

	let numeros = document.getElementsByClassName("numeros");
	const listaNumeros =[];
	let salida="";
   
   //guardar los valores en el  array listaNumeros

   for (var i = 0; i < numeros.length; i++) {
	     	listaNumeros.push(numeros[i].value.trim());
	    }

	if(validarInputs(listaNumeros)){

			let correcto =true;

			//comprobar que el primer numero es el mayor
			for (var i = 1; i < listaNumeros.length; i++) {
				if(Number.parseInt(listaNumeros[i-1]) > Number.parseInt(listaNumeros[i])){
					correcto=false;
			}
		}
			if(correcto){
				salida="<ul>";
				for (var i = 0; i < listaNumeros.length; i++) {
					salida += "<li>"+listaNumeros[i]+"-</li>";
				}
				salida += "</ul>";
				document.getElementById("contenedor").innerHTML = salida;
			}else{
				document.getElementById("contenedor").innerHTML = "no estan ordenados";
			}


    }else{
      	document.getElementById("contenedor").innerHTML = "Error en los numeros";
    }

}

//fin de funcion ordenados