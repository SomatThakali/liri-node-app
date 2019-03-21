var keys = require("./keys.js");
var userInput = require("./userInput");
var Spotify = require("node-spotify-api");

/**
 * This function will search the follwing information by song's name ---
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from
 * */
var spotify = new Spotify(keys.spotify);
module.exports = {
  songSearch: function songSearch() {
    var songName = process.argv[3];

    spotify
      .search({
        type: "track",
        query: userInput.userInputString(songName),
        limit: 5
      })
      .then(function(response) {
        //   console.log(response.tracks.items);
        var tracks = response.tracks.items;
        tracks.forEach(track => {
          var artists = track.album.artists;
          artists.forEach(artist => {
            console.log(
              `Artist: ${artist.name}${"\n"}Track Name: ${track.name}`
            );
            // console.log(track.name);
          });
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
