var stuffINeed = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');


// This is for pulling Twitter status'
var client = new Twitter({
  consumer_key: 'FDkkZ8mSybNwz1DniMzc8RvN4',
  consumer_secret: 'jGbQbMvXv85NNpYNeyrTAJmXPM1W5NKiCW2TNonGJavL4Ek590',
  access_token_key: '923324527555305473-MSE1oqcXXtpYxY6DNhNOjaOjrqWhS2b',
  access_token_secret: 'rES3ijMIjtIPY7HB4HG6g31oPgt0ST3UIuDLnSijsBBWj'
});

var params = {screen_name: 'torocode'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for(i=0; i<tweets.length; i++){
  		var returnData = ('Number: ' + (i+1) + '\n' + 'Tweeted on: ' + tweets[i].created_at + '\n' + 'The Tweet was: ' + tweets[i].text);
  	console.log(returnData);
  	console.log("\n--------------------------\n");
  	}  
  }
});

// This is for pulling Spotify Artist--- 
// I could not figure out the API documentation for this I kept getting errors when I would take out the 'all the small'

// var nameOfSong = process.argv[2];
// var spotify = new Spotify({
//   id: '856debee2f664dcb8ca183b707594177',
//   secret: '61ecddd7bda442429de9b104bd9590b8'
// });

// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });


// spotify
//   .request('https://api.spotify.com/v1/search?type=track&q=monster')
//   .then(function(data) {
//     console.log(data[0]); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

//  var myJSON = JSON.stringify(obj);
 // This is the Movie Search 

var movieOutput = function(userInput){
  if(userInput === undefined){
    userInput = "Mr. Nobody";
    console.log("No movie defined: ", userInput);
  } else {
    userInput = movieNoted;
  }


 var userInput = process.argv[2];

 request('http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&apikey=40e9cece&', function(error, response, body){
    console.log('http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&apikey=40e9cece&')
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); // tomatoRating does not work but this does?
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

 })
};

 movieOutput();


