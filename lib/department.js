const db = require('../db/connection.js');

// Define a SQL query to select all departments from the department table
const departmentSelect = `SELECT * FROM departments`;

// Define a department prompt to ask the user for the department name
const departmentPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name?'
    }
];

const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {});
});