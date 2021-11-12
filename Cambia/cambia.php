<?php  
	if(isset($_REQUEST['opcion'])){
		switch ($_REQUEST['opcion']) {
			case 'kawa':
				echo "kawa.jpg";
				break;
			case 'honda':
				echo "honda.jpg";
				break;
			case 'suzu':
				echo "suzu.jpg";
				break;

			default:
				echo "error";
				break;
		}
	}else{
		echo "no se recibio el parametro opcion";
	}
?>