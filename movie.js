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
module.exports = {
  movie: function movieSearch() {
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
};
