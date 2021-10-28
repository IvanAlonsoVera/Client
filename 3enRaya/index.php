<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>3enRaya</title>
	<script type="text/javascript" src="tresEnRaya.js"></script>
</head>
<body>
	<center>
	<h1>El juego del tres en raya</h1>
	<?php
		$contador=1;
		echo "<table border=1>";
		for ($i=0; $i < 3; $i++) { 
			echo "<tr>\n";
				for ($j=0; $j < 3; $j++){
					echo "<td><canvas id=\"c".$contador."\" width=\"100\" height=\"100\" onclick=\"pintar(c".$contador.','.($contador-1).")\"></canvas></td>\n";
					$contador++;
				}
			echo "</tr>\n";
		}
		echo "</table>";
	?>
	</center>
</body>
</html>