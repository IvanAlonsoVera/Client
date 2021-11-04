function cambiaget() {
	console.log("funciona");
	const llamada = new XMLHttpRequest();
	//+++++++++++++++++++++++++++++++++++++++++++++
	//recibir la respuesta
	llamada.onload = function() {
    	document.getElementById("cambiar").innerHTML = this.responseText;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++

    //+++++++++++++++++++++++++++++++++++++++++++++
	//hacer la consulta
	let opcion = document.getElementById("opc").value;
	let opcion1 = document.getElementById("opc1").value;

	llamada.open("GET", "practicaAjax.php?opcion="+opcion+"&opcion1="+opcion1 , true);
	//eejecutar la consulta
  	llamada.send();
  	//+++++++++++++++++++++++++++++++++++++++++++++
}
function cambiapost(){
	console.log("funciona");
	const llamada = new XMLHttpRequest();
	//+++++++++++++++++++++++++++++++++++++++++++++
	//recibir la respuesta
	llamada.onload = function() {
    	document.getElementById("cambiar").innerHTML = this.responseText;
    }
    //+++++++++++++++++++++++++++++++++++++++++++++

    //+++++++++++++++++++++++++++++++++++++++++++++
	//hacer la consulta
	let opcion = document.getElementById("opc").value;
	let opcion1 = document.getElementById("opc1").value;

	llamada.open("POST", "practicaAjax.php?" , true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//eejecutar la consulta
  	llamada.send("opcion="+opcion+"&opcion1="+opcion1);
  	//+++++++++++++++++++++++++++++++++++++++++++++
}