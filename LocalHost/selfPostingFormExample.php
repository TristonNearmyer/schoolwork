<?php

//assign a default value to input fields and error messages

$inProdName ="";

$inProdPrice = "";

$inRadio = "";

$prodNameErrMsg = "";

$prodPriceErrMsg = "";

$prodRadioErrMsg = "";

	if(isset($_POST["prod_submit"])){
		
		echo("<h1>thank you for submitting the form</h1>");
		
		$inProdName = $_POST["prod_name"];
		
		$inProdPrice = $_POST["prod_price"];
		
		if(isset($_POST['radio'])){ //if radio is selected store the value
		
		$inRadio = $_POST["radio"];
			
		}
		
		echo("<p>prod_name: $inProdName</p>");
		
		echo("<p>prod_price: $inProdPrice</p>");
		
		echo("<p>radio: $inRadio</p>");
		
		
		$validForm = false ; //sets a flag/switch to make sure form data is valid
		
		//PHP validations go here
		
		if($validForm){
			//yes. good data. do database stuff here:
		}
		
		else{
			//BAD BAD data. display error message, display form to user
			
			//1: bad name
			
				//put data on the form
			
			//$prodNameInputErr = $inProdName; //loads error variable
			
				//put error message on the form
			
			$prodNameErrMsg = "invalid name field";
			
				//$validForm = false
			
			//2: bad price
			
			$prodPriceErrMsg = "invalid price";
			
			//3: select a radio button
			
			$prodRadioErrMsg = "please select a color";
		}
	}

	else {
		echo("<h1>please enter your information</h1>");
	}

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

<h1>WDV341 Intro PHP </h1>
<h2>Unit-8 Self Posting Form</h2>
<h3>Example Form</h3>
<p>Converting a form to a self posting form.</p>
<form name="form1" action="" method="post">
  <p>
    <label for="prod_name">Product Name: </label>
    <input name="prod_name" id="prod_name" type="text" value="<?php echo("$inProdName"); ?>">
	  <span><?php echo("$prodNameErrMsg"); ?></span>
  </p>
	
  <p>
    <label for="prod_price">Product Price: </label>
    <input name="prod_price" id="prod_price" type="text" value="<?php echo("$inProdPrice"); ?>">
	  <span><?php echo("$prodPriceErrMsg"); ?></span>
  </p>
  <p>Product Color: <span><?php echo("$prodRadioErrMsg"); ?></span></p>
  <p>
    <input name="radio" id="prod_red" type="radio" <?php if ($inRadio=="red") echo "checked";?> value="red">
    <label for="prod_red">Red Wagon<br>
    </label>
    <input name="radio" id="prod_green" type="radio" <?php if ($inRadio=="green") echo "checked";?> value="green">
    <label for="prod_green">Green Wagon</label>
	  
	 
	  
  </p>
  <p>
    <input name="prod_submit" id="prod_submit" type="submit" value="Submit">
    <input name="Reset" id="button" type="reset" value="Reset">
  </p>
</form>
<p>&nbsp;</p>

</body></html>