var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");

function concertSearch(bandOrArtistName) {
  var appId = keys.appId;
  var bandURL =
    "https://rest.bandsintown.com/artists/" +
    bandOrArtistName +
    "/events?app_id=" +
    appId;
  axios
    .get(bandURL)
    .then(function(response) {
      var ConcertInfo = response.data;
      ConcertInfo.forEach(data => {
        var eventDate = moment(data.datetime).format("MMM Do YYYY, h:mm a");
        console.log(
          `\nVenue Name: ${data.venue.name.bold.red}\nCity Name: ${
            data.venue.city.bold.red
          }\nDate and Time: ${
            eventDate.bold.red
          }\n-----------------------------------------------`
        );
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}

module.exports = { concertSearch };
