var inquirer = require("inquirer");
var categories = require("./categories.js");
var randomWord = [];
var guesses = 8;
var displayWord = "_ ";
var wins = 0;
var loses = 0;
var guessedLetters = [];



if (categories.input === "admin") {
	admin();
}

else {
	startGame();
}
// console.log(categories.animals);
// console.log(categories.movies);
// console.log(categories.classmates);

function startGame() {
	inquirer.prompt([
		{
			name: "startGame",
			message: "Welcome to Hangman! Do you want to start a new game?",
			type: "list",
			choices: ["Yes", "No"]
		}
	]).then(function(ans){

		if (ans.startGame === "Yes") {
			chooseCategory();
		}


		else {
			console.log("Ok.. have a good day")
		}


		})

}



function chooseCategory () {
	guesses = 8;
	displayWord = "_ "
	randomWord = [];


	inquirer.prompt([
		{
			name: "categories",
			message: "Choose a category.",
			type: "list",
			choices: ["Animals", "Movies", "Classmate Names"]
		}
		]).then(function(ans){

			if (ans.categories === "Animals") {
				inquirer.prompt([
				{
					name: "correct",
					message: "You chose: Animals. Is this right?",
					type: "list",
					choices: ["Yes", "No"]
				}

				]).then(function(ans){

					if (ans.correct === "Yes") {
						var random = Math.floor(Math.random() * categories.animals.length)
						randomWord = categories.animals[random];

						console.log("\n")
						console.log("Great! Here's your word.")
						console.log("\n")
						
						hangman();
					}
					else {
						chooseCategory();
					}
				})
				

			}
			else if (ans.categories === "Movies") {
				inquirer.prompt([
				{
					name: "correct",
					message: "You chose: Movies. Is this right?",
					type: "list",
					choices: ["Yes", "No"]
				}

				]).then(function(ans){

					if (ans.correct === "Yes") {
						var random = Math.floor(Math.random() * categories.movies.length)
						randomWord = categories.movies[random];
						console.log("\n")
						console.log("Great! Here's your word.")
						console.log("\n")
						
						hangman();
					}
					else {
						chooseCategory();
					}
				})
			}
			else {
				inquirer.prompt([
				{
					name: "correct",
					message: "You chose: Classmate Names. Is this right?",
					type: "list",
					choices: ["Yes", "No"]
				}

				]).then(function(ans){

					if (ans.correct === "Yes") {
						var random = Math.floor(Math.random() * categories.classmates.length)
						randomWord = categories.classmates[random];
						console.log("\n")
						console.log("Great! Here's your word.\n")
						console.log("\n")
						
						hangman();
					}
					else {
						chooseCategory();
					}
				})
			}

		})
}


function hangman() {
	guesses = 8;
	guessedLetters = [];
	// console.log(randomWord);
	

	for (var i = 1; i < randomWord.length; i++) {
		// if (randomWord[i] === " ") {
		// 	displayWord += " "
		// }
		// else {
		displayWord += "_ "
		// }
	}
	hangmanStart();
}

function hangmanStart(){
	var randomWordLetters = [];
	

	randomWord = randomWord.toUpperCase();
	// console.log(randomWord);


	for (var i = 0; i < randomWord.length; i++) {
		randomWordLetters.push(randomWord.charAt(i));
		randomWordLetters.push(" ");
	}

	if (guesses != 0) {

		inquirer.prompt([{
			name: "letter",
			message: displayWord + "\nGuess a letter: \n",
			validate: function(input) {

				var done = this.async();
		
					if (input.length > 1 || input.length === 0) {
						done("Return just a single letter or number");
						return;
					}

					if (guessedLetters.includes(input.toUpperCase()) === true) {
						done("  <-- You already chose this letter/number.. try again.");
						return;
					}
					done(null, true);	
				}
			

		}]).then(function(ans){
				ans.letter = ans.letter.toUpperCase();
				console.log("You chose " + ans.letter + "\n");

				guessedLetters.push(ans.letter);
				// console.log(guessedLetters);



				
					if (guesses != 0 && randomWord != displayWord) {	

						
						// console.log(randomWordLetters)
						if (randomWordLetters.includes(ans.letter) === true) {

						    for (var i = 0; i < displayWord.length; i++) {
	                			if (randomWordLetters[i] === ans.letter) {
	                    			displayWord = displayWord.substring(0, i) + randomWordLetters[i] + displayWord.substring(i + 1);
	                			}

	            			}

			                if (randomWordLetters.join("") === displayWord) {
			                	console.log("The word is '" + randomWord + "'");
			                    console.log("You win!");
			                    wins++
			                    console.log("Wins: " + wins + " Loses: " + loses);
			                  	gameOver();
			                }
							else {	
							hangmanStart();
							}
						}
						else {
							guesses--
							console.log("Letters did not match. Guesses Left: " + guesses + "\n");
							hangmanStart();
						}
					}


					else {
						youLose();
					}

			})
		}
		else {
			youLose();
		}
}

function gameOver() {

	console.log("Game Over");
	guesses = 9
	
	inquirer.prompt([
		{
			name: "newGame",
			message: "Do you want to play a new game?",
			type: "list",
			choices: ["Yes", "No"]
		}
	]).then(function(ans){
		if (ans.newGame === "Yes") {
			chooseCategory();
		}
		else {
			console.log("Ok.. come back real soon!");
		}
	})

}

function youLose(){

	console.log("You lose...");
	console.log("The word was " + randomWord);
	loses++
	console.log("Wins: " + wins + " Loses: " + loses);
	gameOver();

}

function admin(){

	inquirer.prompt([
		{
			name: "admin",
			message: "Which category do you want to add to",
			type: "list",
			choices: ["Animals", "Movies", "Classmates"]
		}
	]).then(function(ans) {

		switch(ans.admin) {
			case "Animals":
				addNewAnimals();
				break;
			case "Movies":
				addNewMovies();
				break;
			case "Classmates":
				addNewClassmates();
				break;
		}

	})

}

function addNewAnimals() {

	inquirer.prompt([
		{
			name: "animalWord",
			message: "Type in your new word"
		}
	]).then(function(ans){

		categories.addNewAnimal(ans.animalWord);

	})

}

function addNewMovies() {

	inquirer.prompt([
		{
			name: "movieWord",
			message: "Type in your new word"
		}
	]).then(function(ans){

		categories.addNewMovie(ans.movieWord);

	})

}

function addNewClassmates() {

	inquirer.prompt([
		{
			name: "classmateWord",
			message: "Type in your new word"
		}
	]).then(function(ans){

		categories.addNewClassmate(ans.classmateWord);

	})

}
