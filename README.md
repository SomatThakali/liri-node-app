# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Getting Started

Clone a copy of the liri-node-app repo by running:

git@github.com:SomatThakali/liri-node-app.git

## Installing

In order to run the test, you need to have the latest Node.js/npm and git.

For Windows, you have to download and install git and Node.js.

OS X users should install Homebrew. Once Homebrew is installed, run brew install git to install git, and brew install node to install Node.js.

Make sure you have the necessary dependencies:

1. npm i axios
2. npm i moment
3. npm i dotenv
4. npm i spotify
5. npm i colors

## API

In order to run the test, you also need to have the folowing API keys:

1. [OMDB API](http://www.omdbapi.com/)
2. [Bands in Town API](http://www.artists.bandsintown.com/bandsintown-api)
3. [Spotify API](https://developer.spotify.com/documentation/web-api/)

## Running the Tests

### 1. To search the Bands/ Artist in Town

In your teminal/bash window run: node liri.js concert-this <artist/band name here>

Example:

![Screen Shot 2019-03-24 at 4 34 17 PM](https://user-images.githubusercontent.com/36021076/54885495-0256b600-4e53-11e9-89d8-52f0809c1119.png)

![Screen Shot 2019-03-24 at 4 36 26 PM](https://user-images.githubusercontent.com/36021076/54885504-1f8b8480-4e53-11e9-97cf-5df4daa2d066.png)

### 2. To search the information about the songs

Example:

In your teminal/bash window run: node liri.js spotify-this-song 'song name here'
![Screen Shot 2019-03-24 at 4 30 51 PM](https://user-images.githubusercontent.com/36021076/54885430-5a40ed00-4e52-11e9-96e1-73b502eaf282.png)

![Screen Shot 2019-03-24 at 4 31 36 PM](https://user-images.githubusercontent.com/36021076/54885438-69c03600-4e52-11e9-98a9-2cdc75634bb4.png)

### 3. To search the information about the movies

In your teminal/bash window run: node liri.js movie-this 'movie name here'

Example:
![Screen Shot 2019-03-24 at 3 57 41 PM](https://user-images.githubusercontent.com/36021076/54885323-48127f00-4e51-11e9-8083-42deaacf784b.png)
