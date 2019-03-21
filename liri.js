var axios = require("axios");
var colors = require("colors");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var userInput = process.argv[2];

switch (userInput) {
  case "concert-this":
    console.log("Concert Test");
    break;
  case "spotify-this-songs":
    songSearch();
    break;
  case "movie-this":
    movieSearch();
    break;
  case "do-what-it-says":
    console.log("Do what it says Test");
    break;
}

/**
 * This function will search the follwing information by song's name ---
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from
 * */

function songSearch() {
  var songName = process.argv[3];
  userInputString(songName);
  //   'https://api.spotify.com/v1/search?query=baby&type=track&offset=20&limit=20',
  spotify.search({ type: "track", query: userInputString(songName) }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data);
  });
}

/**
 * This function will search the movie by name and will console log ---
 * Title of the movie.
 * Year the movie came out.
 * IMDB Rating of the movie.
 * Rotten Tomatoes Rating of the movie.
 * Country where the movie was produced.
 * Language of the movie.
 * Plot of the movie.
 * Actors in the movie.

 */
function movieSearch() {
  var movieName = process.argv[3];
  var moviekey = keys.movieAPI;
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    userInputString(movieName) +
    "&y=&plot=short&apikey=" +
    moviekey;
  axios.get(queryUrl).then(response => {
    // console.log(response.data);
    console.log(
      "Title: " +
        response.data.Title.red.bold +
        "\nYear: " +
        response.data.Year.red.bold +
        "\nimdb Rating: " +
        response.data.imdbRating.red.bold +
        "\nCountry produced : " +
        response.data.Country.red.bold +
        "\nLanguage: " +
        response.data.Language.red.bold +
        "\nPlot: " +
        response.data.Plot.green.bold +
        "\nActors: " +
        response.data.Actors.red.bold
    );
  });
}

/**
 * This function will allow the user to provide a parameter with as many words as possible
 * @param {string} inputString
 * @returns {string} user input
 */
function userInputString(inputString) {
  inputString = "";
  for (var i = 3; i < process.argv.length; i++) {
    if (i == process.argv.length - 1) {
      inputString += process.argv[i];
    } else {
      inputString += process.argv[i] + "+";
    }
  }
  return inputString;
}
