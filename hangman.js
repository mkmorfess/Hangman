var inquirer = require("inquirer");
var categories = require("./categories.js");
var randomWord = [];
var guesses = 9
var displayWord = "_ ";

startGame();
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
	guesses = 9;
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
						console.log("Great! Here's your first word.")
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
						console.log("Great! Here's your first word.")
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
						console.log("Great! Here's your first word.")
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
	guesses = 9
	var len = randomWord.length;
	console.log(randomWord);
	

	for (var i = 1; i < len; i++) {
		if (randomWord[i] === " ") {
			displayWord += " "
		}
		else {
		displayWord += "_ "
		}
	}
	hangmanStart();
}

function hangmanStart(){

	inquirer.prompt([{
		name: "letter",
		message: displayWord + "\nGuess a letter: \n"
	}]).then(function(ans){
		console.log("You chose " + ans.letter + "\n");

	if (guesses > 1) {	

		if (ans.letter === randomWord.indexOf(ans.letter)) {
			console.log("this matches");
		}

		else {
			guesses--
			console.log("Letters do not match");
			console.log("Guesses Left: " + guesses);
			hangmanStart();
		}
	}

	else {
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

	})

}

