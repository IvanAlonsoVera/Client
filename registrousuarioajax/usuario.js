const llamada = new XMLHttpRequest();
let json

function registro (){
	let registro ={}

	registro.nombre = document.getElementById("nom").value;
	registro.apellido = document.getElementById("ape").value;
	registro.correo = document.getElementById("cor").value;
	registro.usuario = document.getElementById("usu").value;
	registro.contraseña = document.getElementById("passw").value;

	ajax(registro);
}
function login (){
	let login ={}

	login.usuario = document.getElementById("usu").value;
	login.contraseña = document.getElementById("passw").value;

	ajax(login);
}
function ajax (u){
	console.log(u);
	console.log(u.usuario);
	if (!(u.usuario=="") && !(u.contraseña=="")) {
	console.log("estas dentro")
		llamada.onload=function(){
			alert(this.responseText);
		}

		llamada.open("POST", "registrousuarios.php?" , true);

		llamada.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
  		llamada.send("usu="+JSON.stringify(u));

	}else{
		window.location.replace("error.html")
	}

}