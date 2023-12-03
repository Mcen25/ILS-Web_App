
const express = require('express');

console.log('Server-side code running');

const app = express();

const port = 3000;

// serve files from the public directory
app.use(express.static('public'));

app.listen(3000);

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});