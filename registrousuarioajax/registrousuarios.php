<?php 
	//los ficheros con las clases
	require 'usuario.php';
	require 'ListaUsuarios.php';
	$persona= json_decode($_POST['usu']);

	//comprueba que recibe usuario y pass
	if ($persona->usuario !="" && $persona->contrasena !="") {
		registrarUsuario($persona);
	}else{
		echo 0;
	}

	function registrarUsuario($p){

		//datos fichero
		$path = "datos/";
		$fichUsu = "usuarios.txt";

		//se crea el ojeto reg y lista usu
		$reg = new Usuario($p->nombre, $p->apellido, $p->correo, $p->usuario, $p->contrasena);
		$listaUsu= new ListaUsuarios($path,$fichUsu);

		if($listaUsu->noExisteUsuario($reg->getUsu())){
			$fu=fopen($path.$fichUsu,"a");
			fputs($fu,$reg->creeLineaFichero()."\n");
			fclose($fu);
			echo json_encode(true);
		}else{
			echo json_encode(false);
		}
		

		$reg->creeLineaFichero();

	}

