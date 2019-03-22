var keys = require("./keys.js");
var userInput = require("./userInput");
var axios = require("axios");

module.exports = {
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
  movieSearch: function movieSearch() {
    var movieName = process.argv[3];
    var moviekey = keys.movieAPI;
    var queryUrl = "";
    if (!movieName) {
      queryUrl =
        "http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=" + moviekey;
      axios.get(queryUrl).then(response => {
        printMovieInfo(response);
      });
    } else {
      queryUrl =
        "http://www.omdbapi.com/?t=" +
        userInput.userInputString(movieName) +
        "&y=&plot=short&apikey=" +
        moviekey;
      axios.get(queryUrl).then(response => {
        printMovieInfo(response);
      });
    }
  }
};

function printMovieInfo(response) {
  console.log(
    `\nTitle: ${response.data.Title.red.bold}\nYear: ${
      response.data.Year.red.bold
    }\nimdbRating: ${response.data.imdbRating.red.bold}\nCountry Produced: ${
      response.data.Country.red.bold
    }\nLanguage: ${response.data.Language.red.bold}\nPlot: ${
      response.data.Plot.green.bold
    }\nActors: ${
      response.data.Actors.red.bold
    }\n---------------------------------------------------`
  );
}
