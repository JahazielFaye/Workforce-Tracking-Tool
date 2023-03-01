// Import the db module from the 'connection.js' file
const db = require('./db/connection.js');
const mainMenu = require('./lib/prompt.js');

function printWelcome() {
  console.log(`
   __      __       .__                              __         
  /  \\    /  \\ ____ |  |   ____  ____   _____   ____ |  | __ __ 
  \\   \\/\\/   // __ \\|  |  /  _ \\/  _ \\ /     \\_/ __ \\|  |/ // __ \\
   \\        /\\  ___/|  |_>(  <_> )  <_> )  Y Y  \\  ___/|    <\\  ___/
    \\__/\\  /  \\___  >|____/\\____/ \\____/|__|_|  /\\___  >__|_ \\\\___  >
         \\/       \\/                         \\/     \\/     \\/    \\/ 
                                                  
                             by JAHAZIEL P.`
  );
}

// Connect to the database using the 'connect' function from the db module
db.connect(err => {
  if (err) throw err;

  printWelcome();
  // Call the mainMenu function to start the application
  mainMenu();
});