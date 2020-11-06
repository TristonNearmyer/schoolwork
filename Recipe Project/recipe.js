// JavaScript Document

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

		function displayChiliRecipe(){

				localStorage.getItem("chiliRecipe");
				let recipeServing = chiliRecipe.serves;
				let recipePrepTime = chiliRecipe.preparationTime;
				let recipeCookTime = chiliRecipe.cookingTime;
				let servingSize = getCookie("serving quantity");
	
				if(servingSize == "half"){
					recipeServing = recipeServing / 2;
					recipePrepTime = recipePrepTime / 2;
					recipeCookTime = recipeCookTime / 2;
				}
			
				if(servingSize == "double"){
					recipeServing = recipeServing * 2;
					recipePrepTime = recipePrepTime * 2;
					recipeCookTime = recipeCookTime * 2;
				}
				
				document.querySelector(".image > img").setAttribute("src", chiliRecipe.image);
				document.querySelector(".recipe > h1").innerHTML = chiliRecipe.name;
				document.querySelector("#serves").innerHTML = recipeServing;
				document.querySelector("#prepTime").innerHTML = recipePrepTime + " " + chiliRecipe.preparationTimeUnit;
				document.querySelector("#cookTime").innerHTML = recipeCookTime + " " + chiliRecipe.cookingTimeUnit;
				document.querySelector("#ingredients").innerHTML = "";
				document.querySelector("#instructions").innerHTML = "";
				document.querySelector("#notes").innerHTML = "";
				

				for(let i=0; i < chiliRecipe.ingredient.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let ingredientNumber = chiliRecipe.ingredientAmount[i];
					
					if(servingSize == "half"){
						
						ingredientNumber = chiliRecipe.ingredientAmount[i] / 2;
					}
					
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
					document.querySelector("#ingredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(let i=0; i < chiliRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let instructions = chiliRecipe.instructions[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								let newNumber = number[x] / 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								let newNumber = number[x] * 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
					
					let textnode = document.createTextNode(instructions);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#instructions").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(let i=0; i < chiliRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let notes = chiliRecipe.notes[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								
								let newNumber = number[x] / 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								
								let newNumber = number[x] * 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					let textnode = document.createTextNode(notes);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#notes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}
				
				setCookie("current recipe","chili");
				
			};
			
			//for cornbread recipe
			
			function displayCornbreadRecipe(){
				localStorage.getItem("cornBreadRecipe");
				let recipeServing = cornBreadRecipe.serves;
				let recipePrepTime = cornBreadRecipe.preparationTime;
				let recipeCookTime = cornBreadRecipe.cookingTime;
				let servingSize = getCookie("serving quantity");
				
				if(servingSize == "half"){
					recipeServing = recipeServing / 2;
					recipePrepTime = recipePrepTime / 2;
					recipeCookTime = recipeCookTime / 2;
				}
			
				if(servingSize == "double"){
					recipeServing = recipeServing * 2;
					recipePrepTime = recipePrepTime * 2;
					recipeCookTime = recipeCookTime * 2;
				}
			
				document.querySelector(".image > img").setAttribute("src", cornBreadRecipe.image);
				document.querySelector(".recipe > h1").innerHTML = cornBreadRecipe.name;
				document.querySelector("#serves").innerHTML = recipeServing;
				document.querySelector("#prepTime").innerHTML = recipePrepTime + " " + cornBreadRecipe.preparationTimeUnit;
				document.querySelector("#cookTime").innerHTML = recipeCookTime + " " + cornBreadRecipe.cookingTimeUnit;
				document.querySelector("#ingredients").innerHTML = "";
				document.querySelector("#instructions").innerHTML = "";
				document.querySelector("#notes").innerHTML = "";

				for(i=0; i < cornBreadRecipe.ingredient.length; i++){
					let node = document.createElement("li"); // Create a <li> node
					let ingredientNumber = cornBreadRecipe.ingredientAmount[i];
					let servingSize = getCookie("serving quantity");
					
					if(servingSize == "half"){
						
						ingredientNumber = cornBreadRecipe.ingredientAmount[i] / 2;
					}
					
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
				
					
					let textnode = document.createTextNode(ingredientNumber + " " + cornBreadRecipe.ingredientMeasurement[i] + " " + cornBreadRecipe.ingredient[i]);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#ingredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < cornBreadRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let instructions = cornBreadRecipe.instructions[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(x = 0; x < number.length; x++){
								newNumber = number[x] / 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(x = 0; x < number.length; x++){
								newNumber = number[x] * 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
						
					
					
					let textnode = document.createTextNode(instructions);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#instructions").appendChild(node);     // Append <li> to <ul> with id="cornInstructions"
					
				}

				for(i=0; i < cornBreadRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let notes = cornBreadRecipe.notes[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(x = 0; x < number.length; x++){
								console.log(number[x]);
								
								newNumber = number[x] / 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(x = 0; x < number.length; x++){
								console.log(number[x]);
								
								newNumber = number[x] * 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					let textnode = document.createTextNode(notes);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#notes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}
				
				setCookie("current recipe","cornbread");
			};

			//for pecan pie recipe
			
			function displayPecanPieRecipe(){
				
				localStorage.getItem("pecanPieRecipe");
				let recipeServing = pecanPieRecipe.serves;
				let recipePrepTime = pecanPieRecipe.preparationTime;
				let recipeCookTime = pecanPieRecipe.cookingTime;
				let servingSize = getCookie("serving quantity");
	
				if(servingSize == "half"){
					recipeServing = recipeServing / 2;
					recipePrepTime = recipePrepTime / 2;
					recipeCookTime = recipeCookTime / 2;
				}
			
				if(servingSize == "double"){
					recipeServing = recipeServing * 2;
					recipePrepTime = recipePrepTime * 2;
					recipeCookTime = recipeCookTime * 2;
				}
			
				document.querySelector(".image > img").setAttribute("src", pecanPieRecipe.image);
				document.querySelector(".recipe > h1").innerHTML = pecanPieRecipe.name;
				document.querySelector("#serves").innerHTML = recipeServing;
				document.querySelector("#prepTime").innerHTML = recipePrepTime + " " + pecanPieRecipe.preparationTimeUnit;
				document.querySelector("#cookTime").innerHTML = recipeCookTime + " " + pecanPieRecipe.cookingTimeUnit;
				document.querySelector("#ingredients").innerHTML = "";
				document.querySelector("#instructions").innerHTML = "";
				document.querySelector("#notes").innerHTML = "";

				for(i=0; i < pecanPieRecipe.ingredient.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					let ingredientNumber = pecanPieRecipe.ingredientAmount[i];
					let servingSize = getCookie("serving quantity");
					
					if(servingSize == "half"){
						
						ingredientNumber = pecanPieRecipe.ingredientAmount[i]/2;
					}
					
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
					document.querySelector("#ingredients").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < pecanPieRecipe.instructions.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let instructions = pecanPieRecipe.instructions[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								let newNumber = number[x] / 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = instructions.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								let newNumber = number[x] * 2;
								
								instructions = instructions.replace(number[x], newNumber);
								}
							}
							
						}
					
					let textnode = document.createTextNode(instructions);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#instructions").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				for(i=0; i < pecanPieRecipe.notes.length; i++){
					let node = document.createElement("li");                 // Create a <li> node
					
					let notes = pecanPieRecipe.notes[i];
					
					if (servingSize == "half"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								
								let newNumber = number[x] / 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					if (servingSize == "double"){
						
						let findNumber = /\d+/g;
						
						let number = notes.match(findNumber);
						
						if(number != null){
							
							for(let x = 0; x < number.length; x++){
								
								let newNumber = number[x] * 2;
								
								notes = notes.replace(number[x], newNumber);
								}
							}
							
						}
					
					let textnode = document.createTextNode(notes);         // Create a text node
					node.appendChild(textnode);                              // Append the text to <li>
					document.querySelector("#notes").appendChild(node);     // Append <li> to <ul> with id="myList"
				}

				setCookie("current recipe","pecanPie");

			};
			
			
			function changeServingSize(){
				
				alert("youre in changeServingSize")
				
				let servingQuantity = document.querySelector("#customServingQuantity").value;
				
				alert(servingQuantity);
				
				setCookie("serving quantity", servingQuantity);
				
				checkCookie();
				
			}
			
			
			//check cookie function
		
			function checkCookie(){
				
				let currentRecipe = getCookie("current recipe");
				
				if(getCookie("current recipe") == ""){

					displayChiliRecipe();

				}

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