require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "E4duac2q!",
    database: "company_db",
  },
  console.log(`Connected to the database.`)
);
const options = [
  {
    type: "list",
    name: "userChoice",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

function init() {
  inquirer.prompt(options).then((data) => console.log(data));
}

init();
