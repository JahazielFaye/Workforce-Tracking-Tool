const db = require('../db/connection.js');

// SQL statement to select all roles with their associated departments
const roleSelect = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = departments.id`;

//Prompt questions for adding a new role
const rolePrompt = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the role name?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary? (Enter a NUMBER)'
    },
    {
        type: 'list',
        name: 'department',
        message: 'In which department is this role?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

// Function to insert a new role into the database
const roleInsert = (({ roleName, salary, department }) => {
        // SQL statement to insert the new role, using a subquery to get the department ID
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT id FROM departments WHERE name = ?))`;
    const params = [roleName, salary, department];
    db.query(sql, params);
});

// Prompt questions for deleting a role
roleDestroyPrompt = [
    {
        type: 'list',
        name: 'destroyRole',
        message: 'Which role would you like to remove?',
        choices: ['Salesperson', 'Sales Lead', 'Engineer', 'Lead Engineer', 'Accountant', 'Chief Financial Officer', 'Lawyer', 'Legal Team Lead', 'Human Resources Employee', 'Human Resources Director']
    }
];

// Function to delete a role from the database
roleDestroyInsert = (({ destroyRole }) => {
    const sql = `DELETE FROM roles WHERE title = ?`;
    const params = [destroyRole];
    db.query(sql, params, (err, res) => {});
});

// Export the functions and variables for use in other files
module.exports = {
    roleSelect,
    rolePrompt,
    roleInsert,
    roleDestroyPrompt,
    roleDestroyInsert
};