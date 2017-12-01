// var CreateWords = require("./words.js");
var fs = require("fs");



var Categories = function() {

	this.animals = [];
	this.movies = [];
	this.classmates = [];

	this.addAnimal = function(word) {
		this.animals.push(word);
	}

	this.addNewAnimal = function(word) {
		fs.appendFile("animals.txt", ", " + word, function(err){
			if (!err) {
				console.log("Animal Added");
			}
		})
	}

	this.addMovie = function(word) {
		this.movies.push(word);
	}

	this.addNewMovie = function(word) {
		fs.appendFile("movies.txt", ", " + word, function(err){
			if (!err) {
				console.log("Movie Added");
			}
		})
	}

	this.addClassmate = function(word) {
		this.classmates.push(word);
	}

	this.addNewClassmate = function(word) {
		fs.appendFile("classmates.txt", ", " + word, function(err){
			if (!err) {
				console.log("Classmate Added");
			}
		})
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

newWord.addMovie("Eurotrip");

module.exports = {
	animals: newWord.animals,
	movies: newWord.movies,
	classmates: newWord.classmates
}