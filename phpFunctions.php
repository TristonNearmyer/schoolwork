<?php

	function formatDate(){
		
		$todaysDate = getdate(date("Y/m/d"));
		return date('l F, d Y');
		echo($todaysDate);
		
	}

	function formatInternationalDate(){
		
	}

	function displayEmailCharacters(){
		
	}

	function formatNumber(){
		
	}

	function formatNumberToCurrency(){
		
	}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Unit 3 assignment</title>
</head>
<?php formatDate() ;?>
<body>
</body>
</html>