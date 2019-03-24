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

[logo]:

### 2. To search the information about the songs

In your teminal/bash window run: node liri.js spotify-this-song 'song name here'

[logo]:

### 3. To search the information about the movies

In your teminal/bash window run: node liri.js movie-this 'movie name here'

Example:
[logo](./images/movie.png)
