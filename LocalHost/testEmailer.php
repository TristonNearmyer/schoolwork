<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
	
	<h1>testing emailer</h1>
	
	<?php
	
	require 'Emailer.php'; 
	
	$emailTest = new Emailer(); 
	
	$emailTest->setSenderEmail("tcnearmyer@dmacc.edu");
	
	echo($emailTest->getSenderEmail());
	
	$emailTest->setRecipientEmail("tristonnearmyer@gmail.com");
	
	echo($emailTest->getRecipientEmail());
	
	$emailTest->setSubject("test");
	
	echo($emailTest->getSubject());
	
	$emailTest->setMessage("hello");
	
	echo($emailTest->getMessage());
		
	echo $emailTest->sendEmail(); //send email to SMTP server
	
	?>
	
</body>
</html>