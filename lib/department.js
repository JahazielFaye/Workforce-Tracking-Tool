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
// Define a function to insert a new department into the department table based on user input
const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {});
});

// Define a SQL query to get the total cost of each department's salaries
const getDepartmentCost = `
SELECT departments.name AS department, SUM(roles.salary) AS cost 
FROM employees
LEFT JOIN roles ON role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id 
GROUP BY department`;

// Define a prompt to ask the user which department they want to remove
departmentDestroyPrompt = [
    {
        type: 'list',
        name: 'destroyDepartment',
        message: 'Which department would you like to remove?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

departmentDestroyInsert = (({ destroyDepartment }) => {
    const sql = `DELETE FROM departments WHERE name = ?`;
    const params = [destroyDepartment];
    db.query(sql, params, (err, res) => {});
});

// Export all the functions and SQL queries for use in other files
module.exports = {
    departmentSelect,
    departmentPrompt,
    departmentInsert,
    getDepartmentCost,
    departmentDestroyPrompt,
    departmentDestroyInsert
};
