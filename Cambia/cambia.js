function cambia(){
	let valores=document.getElementsByName("radios");
	let valorsele;

	for (var i = 0; i < valores.length; i++) {
		if (valores[i].checked) {
			valorsele=valores[i].value;
			break;
		}
	}

	const llamada = new XMLHttpRequest();

	llamada.onload = function() {
    	document.getElementById("foto").src = this.responseText;
    }

	llamada.open("GET", "cambia.php?opcion="+valorsele , true);

  	llamada.send();

}