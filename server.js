// Import the db module from the 'connection.js' file
const db = require('./db/connection.js');

// Import the mainMenu function from the 'prompt.js' file
const mainMenu = require('./lib/prompt.js');

// Connect to the database using the 'connect' function from the db module
db.connect(err => {
  // If there is an error, throw it
  if (err) throw err;
});

// Call the mainMenu function to start the application
mainMenu();
