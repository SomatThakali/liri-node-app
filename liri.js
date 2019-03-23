require("dotenv").config();
var colors = require("colors");
var movie = require("./javascript/movie");
var songs = require("./javascript/spotify");
var concert = require("./javascript/concert");
var doWhat = require("./javascript/readFile");

var userOption = process.argv[2];
var inputParameter = process.argv[3];

function main(userOption, inputParameter) {
  switch (userOption) {
    case "concert-this":
      concert.concertSearch(inputParameter);
      break;
    case "spotify-this-songs":
      songs.songSearch(inputParameter);
      break;
    case "movie-this":
      movie.movieSearch(inputParameter);
      break;
    case "do-what-it-says":
      doWhat.doWhatItSays();
      break;
    default:
      console.log("Your input is invalid. ");
  }
}

main(userOption, inputParameter);
