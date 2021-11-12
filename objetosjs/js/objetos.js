
//definimos el array
cochesArray = new Array();

function añadir (){
	//definimos el objeto
	let coche = {};

	//cogemos los elementyos y los metemos en el objeto
	coche.marca = document.getElementById("marca").value;
	coche.modelo = document.getElementById("modelo").value;
	coche.tipo = document.getElementById("tipo").value;

	//metemos los objetos al array
	cochesArray.push(coche);

	console.log(cochesArray);

	//elemento ol de donde meter los li
	let elemListaCoches = document.getElementById("listaCoches");

	//metemos los li 
	let elemLi = document.createElement("li");

	elemLi.onclick=borrate;

	//los metemos dentro del li
	elemLi.innerHTML = coche.marca + "," + coche.modelo + "," + coche.tipo;

	elemListaCoches.appendChild(elemLi);
}

function borrate(evento){
	//let elemListaCoches = document.getElementById("listaCoches");
	//elemListaCoches.removeChild(evento.target);

	evento.target.parentNode.removeChild(evento.target);
}