var keys = require("./keys.js");
var axios = require("axios");

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

function movieSearch(movieName) {
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
      movieName +
      "&y=&plot=short&apikey=" +
      moviekey;
    axios.get(queryUrl).then(response => {
      printMovieInfo(response);
    });
  }
}

function printMovieInfo(response) {
  console.log(
    `\nTitle: ${response.data.Title.red.bold}\nYear: ${
      response.data.Year.red.bold
    }\nIMB Rating: ${
      response.data.imdbRating.red.bold
    }\n${printRottenTomatoesRatings(response)}\nCountry Produced: ${
      response.data.Country.red.bold
    }\nLanguage: ${response.data.Language.red.bold}\nPlot: ${
      response.data.Plot.green.bold
    }\nActors: ${
      response.data.Actors.red.bold
    }\n-----------------------------------------------------------------------`
  );
}

/**
 * If the movie does not have rotten tomatoes ratings, then the value will be N/A
 * @param {obj} response
 */
function printRottenTomatoesRatings(response) {
  var rottenTomatoesRatings = response.data.Ratings[1];
  var noRatings = "N/A";
  if (response.data.Ratings.length == 1) {
    return `Rotten Tomatoes Rating: ${noRatings.red.bold}`;
  } else {
    return `Rotten Tomatoes Rating: ${rottenTomatoesRatings["Value"].red.bold}`;
  }
}

module.exports = { movieSearch };
