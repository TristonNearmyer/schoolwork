// JavaScript Document
	
		console.log(chiliRecipe);
		console.log(cornBreadRecipe);
		console.log(pecanPieRecipe); 
		
		let gcd = function(a,b){
			if (b < 0.0000001) return a;
			
			return gcd(b, Math.floor(a % b));
		}
		
						
					
		
		//set cookie function
		
		function setCookie(cName, cValue){
			document.cookie = cName + "=" + cValue;
		}
		
		//get cookie function
		
		function getCookie(cName){
			
			let name = cName + "=";
			let ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++){
				let c = ca[i];
				while (c.charAt(0) == ' '){
					c = c.substring(1);
				}
				if(c.indexOf(name) == 0){
					return c.substring(name.length, c.length);
				}
			}
			
			return "";
			
		}
		
		//end get cookie function
		
		function pageLoad(){
			
			/*document.cookie = "current recipe = chili";
			
			document.cookie = "serving = normal";
		
			alert(document.cookie);

			let currentRecipe = getCookieValue("current recipe");
			
			let currentServing = getCookieValue("serving");

			alert(currentRecipe);*/
	
			//for chili recipe
			
			function displayChiliRecipe(){
				
				document.querySelector("#chiliRecipe").style.display = "flex";
				document.querySelector("#cornbreadRecipe").style.display = "none";
				document.querySelector("#pecanPieRecipe").style.display = "none";
				
				document.querySelector("#chiliRecipe > img").setAttribute("src", chiliRecipe.image);
				document.querySelector("#chiliRecipe > h1").innerHTML = chiliRecipe.name;
				document.querySelector("#chiliServes").innerHTML = chiliRecipe.serves;
				document.querySelector("#chiliPrepTime").innerHTML = chiliRecipe.preparationTime + " " + chiliRecipe.preparationTimeUnit;
				document.querySelector("#chiliCookTime").innerHTML = chiliRecipe.cookingTime + " " + chiliRecipe.cookingTimeUnit;
				document.querySelector("#chiliIngredients").innerHTML = "";
				document.querySelector("#chiliInstructions").innerHTML = "";
				document.querySelector("#chiliNotes").innerHTML = "";
				

				for(i=0; i < chiliRecipe.ingredient.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let ingredientNumber = chiliRecipe.ingredientAmount[i];
					
					if(ingredientNumber % 1 != 0){
						
						let fraction = ingredientNumber;
						let len = fraction.toString().length - 2;

						let denominator = Math.pow(10, len);
						let numerator = fraction * denominator;

						let divisor = gcd(numerator,denominator);

						numerator /= divisor;
						denominator /= divisor;

						ingredientNumber = Math.floor(numerator) + '/' + Math.floor(denominator);
						
					}
					
					let textnode = document.createTextNode(ingredientNumber + " " + chiliRecipe.ingredientMeasurement[i] + " " + chiliRecipe.ingredient[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#chiliIngredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < chiliRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let textnode = document.createTextNode(chiliRecipe.instructions[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#chiliInstructions").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < chiliRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let textnode = document.createTextNode(chiliRecipe.notes[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#chiliNotes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}
				
				setCookie("current recipe","chili");
				
			};
			
			//for cornbread recipe

			
			function displayCornbreadRecipe(){
				
				document.querySelector("#chiliRecipe").style.display = "none";
				document.querySelector("#cornbreadRecipe").style.display = "flex";
				document.querySelector("#pecanPieRecipe").style.display = "none";
			
				document.querySelector("#cornbreadRecipe > img").setAttribute("src", cornBreadRecipe.image);
				document.querySelector("#cornbreadRecipe > h1").innerHTML = cornBreadRecipe.name;
				document.querySelector("#cornServes").innerHTML = cornBreadRecipe.serves;
				document.querySelector("#cornPrepTime").innerHTML = cornBreadRecipe.preparationTime;
				document.querySelector("#cornCookTime").innerHTML = cornBreadRecipe.cookingTime;
				document.querySelector("#cornIngredients").innerHTML = "";
				document.querySelector("#cornInstructions").innerHTML = "";
				document.querySelector("#cornNotes").innerHTML = "";

				for(i=0; i < cornBreadRecipe.ingredient.length; i++){
					let node = document.createElement("li"); // Create a <li> node
					let ingredientNumber = cornBreadRecipe.ingredientAmount[i];
					
					if(ingredientNumber % 1 != 0){
						
						if(ingredientNumber = 0.3){
						ingredientNumber = "1/3";
					}
						
						let fraction = ingredientNumber;
						let len = fraction.toString().length - 2;

						let denominator = Math.pow(10, len);
						let numerator = fraction * denominator;

						let divisor = gcd(numerator,denominator);

						numerator /= divisor;
						denominator /= divisor;

						ingredientNumber = Math.floor(numerator) + '/' + Math.floor(denominator);
						
					}
					
					let textnode = document.createTextNode(ingredientNumber + " " + cornBreadRecipe.ingredientMeasurement[i] + " " + cornBreadRecipe.ingredient[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#cornIngredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < cornBreadRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let textnode = document.createTextNode(cornBreadRecipe.instructions[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#cornInstructions").appendChild(node);     // Append <li> to <ul> with id="myList"
					
					let t = /\d+/;
					
					let f = cornBreadRecipe.instructions[i];
					
					console.log(f.match(t));
				}

				for(i=0; i < cornBreadRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let textnode = document.createTextNode(cornBreadRecipe.notes[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#cornNotes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}
				
				setCookie("current recipe","cornbread");
			};

			//for pecan pie recipe
			
			function displayPecanPieRecipe(){
				
				document.querySelector("#chiliRecipe").style.display = "none";
				document.querySelector("#cornbreadRecipe").style.display = "none";
				document.querySelector("#pecanPieRecipe").style.display = "flex";
			
				document.querySelector("#pecanPieRecipe > img").setAttribute("src", pecanPieRecipe.image);
				document.querySelector("#pecanPieRecipe > h1").innerHTML = pecanPieRecipe.name;
				document.querySelector("#pecanServes").innerHTML = pecanPieRecipe.serves;
				document.querySelector("#pecanPrepTime").innerHTML = pecanPieRecipe.preparationTime;
				document.querySelector("#pecanCookTime").innerHTML = pecanPieRecipe.cookingTime;
				document.querySelector("#pecanIngredients").innerHTML = "";
				document.querySelector("#pecanInstructions").innerHTML = "";
				document.querySelector("#pecanNotes").innerHTML = "";

				for(i=0; i < pecanPieRecipe.ingredient.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let ingredientNumber = pecanPieRecipe.ingredientAmount[i];
					
					if(ingredientNumber % 1 != 0){
						
						let fraction = ingredientNumber;
						let len = fraction.toString().length - 2;

						let denominator = Math.pow(10, len);
						let numerator = fraction * denominator;

						let divisor = gcd(numerator,denominator);

						numerator /= divisor;
						denominator /= divisor;

						ingredientNumber = Math.floor(numerator) + '/' + Math.floor(denominator);
						
					}
					
					let textnode = document.createTextNode(ingredientNumber + " " + pecanPieRecipe.ingredientMeasurement[i] + " " + pecanPieRecipe.ingredient[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#pecanIngredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < pecanPieRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let textnode = document.createTextNode(pecanPieRecipe.instructions[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#pecanInstructions").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < pecanPieRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let textnode = document.createTextNode(pecanPieRecipe.notes[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#pecanNotes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				setCookie("current recipe","pecanPie");

			};
			
			
			function changeServingSize(){
				let servingQuantity = document.querySelector("#customServingQuantity").value;
				
				setCookie("serving quantity", servingQuantity);
				
				
			}
			
			function adjustIngredientAmounts(){
				
			}
			
			
			//check cookie function
		
			function checkCookie(){
				let currentRecipe = getCookie("current recipe");

				if (currentRecipe == "chili"){

					displayChiliRecipe();

				}

				if (currentRecipe == "cornbread"){

					displayCornbreadRecipe();

				}

				if (currentRecipe == "pecanPie"){

					displayPecanPieRecipe();

				}
			}
		
			
			checkCookie();
			
			document.querySelector("#selectChili").addEventListener("click", displayChiliRecipe);
			document.querySelector("#selectCornbread").addEventListener("click", displayCornbreadRecipe);
			document.querySelector("#selectPecanPie").addEventListener("click", displayPecanPieRecipe);
		};