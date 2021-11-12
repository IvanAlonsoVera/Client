<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Cuatro en raya</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
		<script type="text/javascript" src="cuatroenraya.js"></script>
	</head>

	<body>


		<div class="container p-5 my-5 bg-primary text-white">
			<div class="text-center">
				<h1 align="center">Cuatro en raya</h1>
				<br><br>
				<table align="center" style="background-color:black;">
				<?php

					$contador = 1;
					echo "\n";
					
					for ($i=0; $i < 6; $i++) {

						echo "\t\t\t\t\t<tr>\n";

						for ($j=0; $j < 7; $j++){

							echo "\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<canvas width='100' height='100' id=f".($i+1)."c".($j+1)." onclick='juega(f".($i+1)."c".($j+1).")'></canvas>\n\t\t\t\t\t\t</td>\n";
							$contador++;

						}

						echo "\t\t\t\t\t</tr>\n";
					}

				?>
				</table>
			</div>
		</div>

	</body>
</html>