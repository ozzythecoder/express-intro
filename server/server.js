// require('express') gives us a function
const express = require('express');

// create an instance of express by calling the above function
// (this gives us an object)
const app = express();
// 5000 is the port on which the server will be listening
const port = 5000;

// syntax: app.use(express.static( 'directory of our static assets' ))
// points to our static assets
app.use(express.static('server/public'))

// tells the server to listen on port 5000; will log this message when server is live
app.listen(port, () => {
  console.log('listening on port', port);
} )