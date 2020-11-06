// JavaScript Document

let chiliRecipe = {
	
	name: "Crockpot Chili",
	image: "images/chili.jpg",
	serves: 6,
	preparationTime: 25,
	preparationTimeUnit: "minutes",
	cookingTime: 6,
	cookingTimeUnit: "hours",
	ingredientAmount: [2,1,1,4,1,1,2,2,2,2,1,0.5],
	ingredientMeasurement: ["tbsp.", "cup", "cup", "tbsp.", "tsp.", "lb", "cans", "cans", "cans", "cans", "cup", "cup"],
	ingredient: ["cooking oil", "onion", "chopped peppers", "Chili powder", "Hot chili powder (optional)", "ground beef or chicken", "Red Beans", "Kidney Beans", "Tomato Puree", "Tomato Sauce", "shredded cheese (optional)", "sour cream (optional)"],
	instructions: ["Heat cooking oil in 2 quart skillet.", "Saute onions and peppers for 5 minutes.", "Add spices and stir for 30 seconds.", "Add meat and cook until browned. Approximately 15 minutes.", "Pour contents of skillet into 3 quart crock pot.", "Rinse beans and place in crockpot.", "Open and pour Tomato puree and sauce into crock pot.", "Cover crockpot and cook on low for 6 hours.", "Serve into individual bowls and top with sour cream and cheese."],
	notes: ["none"]
	
};

let cornBreadRecipe = {
	
	name: "T's Cornbread",
	image: "images/cornbread.jpg",
	serves: 9,
	preparationTime: 10,
	preparationTimeUnit: "minutes",
	cookingTime: 20,
	cookingTimeUnit: "minutes",
	ingredientAmount: [1,1,1,0.5,0.125,0.5,0.3,2,1,1],
	ingredientMeasurement: ["cup","cup","tsp.","tsp.","tsp.","cup","cup","tbsp.", "large","cup"],
	ingredient: ["cornmeal", "all-purpose flour", "baking powder", "baking soda", "salt", "unsalted butter, melted and slightly cooked", "packed light or dark brown sugar", "honey", "egg at room temp", "buttermilk at room temp"],
	instructions: ["Preheat oven to 400°F (204°C). Grease and lightly flour an 8 or 9-inch square baking pan. Set aside.", 	"Whisk the cornmeal, flour, baking powder, baking soda, and salt together in a large bowl. Set aside. In a medium bowl, whisk the melted butter, brown sugar, and honey together until completely smooth and thick. Then, whisk in the egg until combined. Finally, whisk in the buttermilk. Pour the wet ingredients into the dry ingredients and whisk until combined. Avoid over-mixing.", "Pour batter into prepared baking pan. Bake for 20 minutes or until golden brown on top and the center is cooked through. Use a toothpick to test. Edges should be crispy at this point. Allow to slightly cool before slicing and serving. Serve cornbread with butter, honey, jam, or whatever you like.", "Wrap leftovers up tightly and store at room temperature for up to 1 week."],
	notes: ["Freezing Instructions: For longer storage, freeze baked cornbread for up to 3 months. Allow to thaw overnight in the refrigerator and heat up in the microwave or bake in a 300°F (149°C) oven for 10 minutes.", "Buttermilk: Buttermilk is required for this recipe. If you don’t have any, you can make a DIY sour milk by adding 2 teaspoons of fresh lemon juice or white vinegar to a liquid measuring cup. Then add enough whole milk to make 1 cup total. Stir and let sit for 5 minutes before using. Whole milk is strongly recommended for moistest, richest texture, but you can use lower fat or nondairy milk in a pinch.", "Optional add-ins: 1 to 2 chopped jalapeño peppers, 1 cup blueberries, 1 cup total dried cranberries and walnuts, 1 cup shredded cheddar cheese, or 1/2 cup bacon crumbles", "Skillet Cornbread: Baking cornbread in a skillet gives it an even heartier, crunchy crust. Bake this cornbread in a 9-inch or 10-inch oven safe greased skillet at the same temperature for the same amount of time."]
	
};

let pecanPieRecipe = {
	
	name: "T's Pecan Pie",
	image: "images/pecan.jpg",
	serves: 10,
	preparationTime: 10,
	preparationTimeUnit: "minutes",
	cookingTime: 60,
	cookingTimeUnit: "minutes",
	ingredientAmount: [1,3,1,2,1,6,9],
	ingredientMeasurement: ["cup","regular","cup","tbsps.","tsps.","oz","inch"],
	ingredient: ["Karo® Light OR Dark Corn Syrup", "eggs", "granulated sugar", "butter, melted", "pure vanilla extract", "coarsely chopped pecans", "unbaked OR frozen deep-dish pie crust"],
	instructions: ["Preheat oven to 350°F.", "Mix Karo® Light Corn Syrup, eggs, sugar, butter and vanilla using a spoon or a rubber spatula. Stir in pecans and pour the mixture into pie crust.", "Bake on center rack of oven for 60 to 70 minutes. Cool for at least 2 hours on wire rack before serving."],
	notes: ["If you are using a prepared frozen pie crust, place cookie sheet in oven and preheat oven as directed. Pour filling into frozen crust and bake on preheated cookie sheet.", "The pie is done when center reaches 200°F. Tap center surface of pie lightly – it should spring back when done. If pie crust is over-browning, cover edges with foil."]
	
};

localStorage.setItem("pecanPieRecipe", pecanPieRecipe);
localStorage.setItem("chiliRecipe", chiliRecipe);
localStorage.setItem("cornBreadRecipe", cornBreadRecipe);

