// DEPENDENCIES
const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',

  password: 'OpenMid',
  database: 'employee_trackerDB',
});

// DATA

// create an array for user to choose from
const userChoice = ["View All Employees", "View All Employees by Department", "View All Employees by Manager", "Add Employees"]

const userInterface = [
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: userChoice,
        default: "View All Employees"
    }
]

// FUNCTIONS

// USER INTERACTIONS
inquirer
  .prompt(userInterface)