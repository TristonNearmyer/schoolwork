<?php

session_start();

?>
<!DOCTYPE html>
<html>
<head>
	<title>Pets-2-Go</title>
	<!-- Author: Triston Nearmyer
		Date: December 6 2018
		-->
 <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="proper care for pets">
  <meta name="keywords" content="proper care, domestic shorthair, German shepherd">

 <link rel="stylesheet" type="text/css" href="CSS/petsToGo.css"> 

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
	</script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
	</script>
	
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<style>

h3{
	margin-top:10px;
	text-decoration:underline;
}

</style>
<body>
<section id="top"></section>
<div class="container-fluid" style="padding: 0px">
	<header>
		<img src="images/ptgbanner.jpg" alt="banner" class="col-lg-12" style="padding: 0px">
		<h1>Pets-To-Go</h1>
	</header>
	
		<nav class="navbar justify-content-center sticky-top">
		<center>
		<ul>
			<li><a href="index.php">About Us</a></li>
			<li><a href="pets.php">About Our Pets</a></li>
			<li><a href="gallery.php">Pet Gallery</a></li>
			<li><a href="care.php">Proper Care</a></li>
			<?php if(!isset($_SESSION["Administrator"])){
					echo("<li><a href='petsLogin.php'>Log In</a></li>");

					}
					elseif($_SESSION["Administrator"] == "valid user"){
						echo("<li><a href='addPets.php'>Add a pet</a></li>");
					echo("<li><a href='addEvents.php'>Add an Event</a></li>");
						echo("<li><a href='petsLogout.php'>Log Out</a></li>");
							
						}?>
		</ul>
		</center>
		</nav>
	
	<div class="row">
	<div class="hours col-lg-4">
		
		<h2>Hours:</h2>
		<p>Sunday 12:00 noon to 5:00 pm</p>
		<p>Monday – Thursday 10:00 am to 7:00 pm</p>
		<p>Friday 10:00 am to 4:00 pm</p>
		<p>Saturday 9:00 am to 5:00 pm</p>

		<h2>Pet’s To Go  Upcoming Events:</h2>

		<h3><strong>Saturday, March 5:</strong></h3>
		<p>Our annual Adopt-a-Rama Open House from 10:00 a.m. to 4:00 p.m.</p>


		<h3><strong>Monday, March 14:</strong></h3>
		<p>Volunteer training from 6:30 p.m. to 8:00 p.m.</p>


		<h3><strong>Tuesday, March 15:</strong></h3>
		<p>Obedience 101 class from 6:30 p.m. to 7:30 p.m. You must be enrolled to attend.</p>

	</div>
	
	<div class="col-lg-8 about">
		
		<h1>Proper Care:</h1>
		<h3 id="cat">Domestic Shorthair:</h3>
		<p>There's not too much you have to provide an American Shorthair with besides love, attention, water and food--just be sure not to give too much of the latter, as this breed has a tendency to become overweight. This can put them at risk for diabetes and other health problems. American Shorthairs are prone to shedding, so make sure you brush your cat's coat a couple of times a week. These cats are great as either indoor or outdoor pets. You'll also have a long-term companion, as this sturdy, robust breed usually lives anywhere from 15 to 20 years. As always, check with your veterinarian with any questions you have about the health or care of your cat, and be sure to keep up with regular vaccinations. For more information on this breed visit <a href="https://www.catster.com/catbreed/domestic_shorthair">www.catster.com</a></p>
		
		<h3 id="dog">Shephard Mix:</h3>
		<p>The German Shepherd can live outdoors in cool or temperate climates, but enjoys living indoors too. Frequent training or exercise sessions are essential for keeping its mind and body active, and because the German Shepherd sheds throughout the year, its coat should be brushed once or twice a week to encourage turnover as well as to minimize buildup in the home. For more information on this breed visit <a href="https://www.akc.org/dog-breeds/german-shepherd-dog/">www.akc.org</a></p>

	</div>
	</div>
	
	<footer class="row">
	<div class="col-lg-6">
	<p><a href="#top">Go to Top</a></p>
	<a href="Contact_Form.php">Contact Us</a>
	<p>Pets To Go Animal Shelter</p>
	<p>3183 S Veterans Pkwy</p>
	<p>Springfield, Illinois 62704</p>

	<p>(217) 698-3091</p>
		</div>
	<div class="col-lg-6">
	<img src="images/ptglogo.png" alt="logo" width="200" height="204">
	</div>
	</footer>

</div> <!--close container div-->
</body>
</html>