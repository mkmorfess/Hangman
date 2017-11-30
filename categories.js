var CreateWords = require("./words.js");
var fs = require("fs");

animals = [];
movies = [];
classmates = [];

var Categories = function() {

	this.addAnimal = function(word) {
		animals.push(word);
	}

	this.addMovie = function(word) {
		movies.push(word);
	}

	this.addClassmate = function(word) {
		classmates.push(word);
	}

}

var newWord = new Categories();

fs.readFile("animals.txt", "utf8", function(err, data) {

	if (!err) {

		var dataArr = data.split(", ");

		for (var i = 0; i < dataArr.length; i++) {
			newWord.addAnimal(dataArr[i])
		}
	}

})

fs.readFile("movies.txt", "utf8", function(err, data) {

	if (!err) {

		var dataArr = data.split(", ");

		for (var i = 0; i < dataArr.length; i++) {
			newWord.addMovie(dataArr[i])
		}
	}

})

fs.readFile("classmates.txt", "utf8", function(err, data) {

	if (!err) {

		var dataArr = data.split(", ");

		for (var i = 0; i < dataArr.length; i++) {
			newWord.addClassmate(dataArr[i])
		}

	}

})



module.exports = {
	animals: animals,
	movies: movies,
	classmates: classmates
}