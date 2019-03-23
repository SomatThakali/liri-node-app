var songs = require("./spotify");
var fs = require("fs");

function doWhatItSays() {
  fs.readFile("./random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log("Data ", data);
    var dataArr = data.split(",");
    userChoice = dataArr[0];
    inputParameter = dataArr[1];
    // console.log(dataArr);
    // console.log(dataArr[1]);
    songs.songSearch(inputParameter);
  });
}

module.exports = { doWhatItSays };
