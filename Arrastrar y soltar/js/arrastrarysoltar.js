function onDragStart(evento) {
	event.dataTransfer.setData('text/plain', event.target.id);
	event.currentTarget.style.backgroundColor = 'yellow';
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event) {
  const id = event.dataTransfer.getData('text');

  const elemQueArrastro=document.getElementById(id);

  const destino=event.target;

  destino.appendChild(elemQueArrastro);

  event.dataTransfer.clearData();
}