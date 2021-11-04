<?php  

	if((isset($_REQUEST['opcion']))&&(isset($_REQUEST["opcion1"]))){
		switch ($_REQUEST['opcion']) {
			case 'A':
				echo "se recibio una A y".$_REQUEST["opcion1"];
				break;
			case 'B':
				echo "se recibio una B y".$_REQUEST["opcion1"];
				break;
			default:
				echo "se recibio otra cosa y".$_REQUEST["opcion1"];
				break;
		}
	}else{
		echo "no se recibio el parametro opcion";
	}
?>