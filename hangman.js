var inquirer = require("inquirer");
var categories = require("./categories.js");

// console.log(categories.animals);
// console.log(categories.movies);
// console.log(categories.classmates);

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





function chooseCategory () {
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
						// console.log(categories.animals[random]);
						console.log("Great! Here's your first word.")
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
						// console.log(categories.movies[random]);
						console.log("Great! Here's your first word.")
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
						// console.log(categories.classmates[random]);
						console.log("Great! Here's your first word.")
					}
					else {
						chooseCategory();
					}
				})
			}

		})
}