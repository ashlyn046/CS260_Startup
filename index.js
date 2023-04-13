const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//This code defines a route on the /api/songs endpoint that responds with the current songs in JSON format. 
//The songs are stored in a variable called songs.
apiRouter.get('/songs', (_req, res) => {
  res.send(songs);
});

//This code defines a route on the /api/score endpoint that accepts a JSON payload representing a new 
//score submission. It passes the request body to a function called updateScores along with the current scores array. 
//It then sends back the updated high scores array.
apiRouter.post('/song', (req, res) => {
  songs = updateSongs(req.body, songs);
  res.send(songs);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  console.log("in the one");
  res.sendFile('index.html', { root: 'public' });
});

console.log('Starting server...');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let songs = [];
function updateSongs(newSong, songs) {
  songs.push(newSong);

  if (songs.length > 10) {
    songs.length = 10;
  }

  return songs;
}
