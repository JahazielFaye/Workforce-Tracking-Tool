# 🏢 Workforce-Tracking-Tool

This is a command-line application that helps you manage a company's employee database. It's built using Node.js, Inquirer, and MySQL.

## 🛠️ Technologies Used

- JavaScript
- Node.js
- Express.js
- MySQL database
- MySQL2
- console.table

## 🚀 Getting Started

To use this application, you'll need to have Node.js and MySQL installed on your machine. Once you have those, follow these steps:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Open the `db/schema.sql` file and execute the SQL queries to create the database and tables.
5. Create a `.env` file in the project directory and set the following environment variables:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your_mysql_password>


6. Run `node index.js` to start the application.

## 📝 Usage

When you start the application, you'll be presented with a menu of options to manage the employee database. You can:

- View all employees
- View employees by department
- View employees by manager
- Add an employee
- Remove an employee
- Update an employee's role
- Update an employee's manager

Simply follow the prompts to perform the desired action.



Have fun using Workforce-Tracking-Tool! Let us know if you have any feedback or suggestions.

