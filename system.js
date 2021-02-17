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
        choices: userChoice
    }
]

// FUNCTIONS

// USER INTERACTIONS

// create a main function
const managment = () => {
    inquirer
    .prompt(userInterface)
    .then(result => {
        switch (result.userInterface) {
            // user selects 1st option
            case "View All Employees":
                break;
            // user selects 2nd option
            case "View All Employees by Department":
                break;
            // user selects 3rd option
            case "View All Employees by Manager":
                break;
            // user selects 4th option    
            case "Add Employees":
                break;
            // user doesn't pick any available options
            default:
                console.log(`Not a viable options. Try again: ${result.userInterface}`);
                break;
        }
    });
}
