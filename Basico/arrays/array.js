const nombres = ["juan","pepe","maria","ana"];

nombres.push("isabel");

nombres[2]="jose";nombres

for (var i = 0; i < nombres.length; i++) {
	console.log(nombres[i]);
}

//objeto
const persona = {nombre:"alfredo",apellidos:"garcia",edad:27};

console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.edad);

//for in

for (let n in nombres) {
	console.log(n);
}