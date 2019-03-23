var keys = require("./keys.js");
var userInput = require("./userInput");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

/**
 * This function will search the follwing information by song's name ---
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from
 * */
function songSearch(songName) {
  const searchParams = {
    type: "track",
    query: songName,
    limit: 20
  };

  spotify
    .search(searchParams)
    .then(function(response) {
      var tracks = response.tracks.items;
      tracks.forEach(track => {
        var artists = track.album.artists;
        artists.forEach(artist => {
          console.log(
            `\nAlbum: ${track.album.name.bold.red}\nArtist: ${
              artist.name.bold.red
            }\nSong's Name: ${track.name.bold.red}\nPreview URL: ${
              track.preview_url
            }\n-----------------------------------------------`
          );
        });
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}

module.exports = { songSearch };
