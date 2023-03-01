const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '778877Hazel*',
    database: 'Workforce-Tracking-Tool'
});

module.exports = db;