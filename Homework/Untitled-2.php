<?php

$firstName = "Triston"; //datatype: string, variable scope: global//
$lastName = "Nearmyer";

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

	<?php
	
		echo "<h1>HELLO WORLD</h1>";
		echo "this is not formatted";
	?>
	
	<h1>WDV341: Intro PHP</h1>
	
	<h2>Monday Nights 6-10</h2>
	
	<p>hello world</p>
	
	<h2>hello <?php echo $firstName." ".$lastName;?></h2>
	
	<?php
	
		echo "<h1>php wrote this</h1>";
	
	?>
	
</body>
</html>