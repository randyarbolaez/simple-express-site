const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

app.use(express.static('public'));

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

// cat route:
app.get('/cat', (request, response, next) => {
  response.sendFile(__dirname + '/views/cat-page.html');
});

app.get('/about', (req, res, next) => {
  console.log(req);
  res.send(`<h1>About Page</h1>
  <h3>This is my about page</h3>
  <p>hey , whats up</p>
  <h1>how are you doing?</h1>`);
});
