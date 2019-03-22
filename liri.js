require("dotenv").config();
var colors = require("colors");
var movie = require("./javascript/movie");
var songs = require("./javascript/spotify");
var concert = require("./javascript/concert");

var userInput = process.argv[2];

switch (userInput) {
  case "concert-this":
    concert.concertSearch();
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
