<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Unit-3 Notes</title>
	
	<!--

	Model- Data Database, variables, input values, form data
	View- Output displayable content "web page" html
	Controler- where we do our work, business logic
	
	-->
	
	<?php
	
		$fName = "";
		$lName = "";
	
		$fName = "Mark";
		$lName = "leaver";
	
		function outputFullName1(){
			
			global $fName, $lName;//needed to use global variables in php functions
			echo("$fName, $lName");
			echo("<br>");
			echo($fName . "," . $lName);
			echo("<br>");
			
		}
	
		function outputFullName2($inFirstName , $inLastName){
			
			echo("$inLastName, $inFirstName");
			echo("<br>");
			echo($inLastName . "," . " " . $inFirstName);
			echo("<br>");
			
		}
	
		function outputFullName3($inFirstName , $inLastName){
			return("$inLastName, $inFirstName");
		}
	?>
	
</head>

<body>
	
	<h1>WDV341 Intro PHP</h1>
	<h2>Unit-3 PHP Functions</h2>
	<h3>writing and using php functions</h3>
	
	<div>
	
		<h3>student roster</h3>
		<?php
		outputFullName2("Triston" , "Nearmyer");
		outputFullName2("Bill" , "Gates");
		outputFullName1();
		?>
	</div>
	
	<div>
	
		<h3>student roster 3</h3>
		<?php
			echo(outputFullName3("Robin", "Williams"));
			echo("<br>");
			echo(outputFullName3("Triston", "Nearmyer"));
		?>
	</div>
	
</body>
</html>