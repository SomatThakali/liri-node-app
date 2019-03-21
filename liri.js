require("dotenv").config();
var colors = require("colors");
var movie = require("./movie");
var songs = require("./spotify");

var userInput = process.argv[2];

switch (userInput) {
  case "concert-this":
    console.log("Concert Test");
    break;
  case "spotify-this-songs":
    songs.songSearch();
    break;
  case "movie-this":
    movie.movieSearch();
    break;
  case "do-what-it-says":
    console.log("Do what it says Test");
    break;
}
