<?php

//this php file will connect to the wdv341 database
//it will pull the form data from the $_POST variable
//it will format an INSERT SQL statement
//it will create a prepared statement
//it will bind the parameters to the prepared statement
//it will execute the prepared statment to insert into the database
//it will display a success/failure message to the user

require('dbConnect.php'); //access and run this external file


try{
	$eventName = "WDV341 Intro PHP";
	$eventDescription = "we are inserting into a database";
	$eventDate = "2020-02-24";



	//PDO prepared statements

	//1: prepare the sql statement

	$sql = "INSERT INTO wdv341_event (event_name, event_description, event_date)
			VALUES (:eventName, :eventDescription, :eventDate)";

	//2: create the prepared statement object

	$stmt = $conn->prepare($sql);

	//3:bind paramaters to the prepared statement object

	$stmt->bindParam(':eventName', $eventName);
	$stmt->bindParam(':eventDescription',$eventDescription);
	$stmt->bindParam(':eventDate', $eventDate);

	//4:Execute the prepared statement

	$stmt->execute();
	}

catch(PDOException $e){
	echo("WARNING");
}

$conn = null; //close your connection object

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Insert Events</title>
</head>

<body>
	
	<h2>thank you for your order</h2>
	
</body>
</html>