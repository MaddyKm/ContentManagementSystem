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
const newRoleQuestions = [
  {
    type: "input",
    message: "Enter the name of the role",
    name: "newRole",
  },
  {
    type: "input",
    message: "Enter the salary of the new role",
    name: "newSalary",
  },
  {
    type: "input",
    message:
      "Enter the department id of the role (1=Teaching, 2=Management, 3=Maintenance, 4=Corporate",
    name: "newRoleDepartment",
  },
];
const newEmployeeQuestions = [
  {
    type: "input",
    message: "Enter the name of the employee",
    name: "newEmployee",
  },
  {
    type: "input",
    message: "Enter the employee's first name",
    name: "firstName",
  },
  {
    type: "input",
    message: "Enter the employee's last name",
    name: "lastName",
  },
  {
    type: "input",
    message: "Enter the employee's role",
    name: "role",
  },
  {
    type: "input",
    message: "Enter the employee's manager",
    name: "manager",
  },
];
function init() {
  inquirer.prompt(options).then((data) => {
    console.log(data);
    if (data.userChoice === "View all departments") {
      db.query(
        "SELECT id, name AS department FROM department",
        function (err, results) {
          console.table(results);
        }
      );
    } else if (data.userChoice === "View all roles") {
      db.query(
        "SELECT role.title AS role, role.salary, role.department_id, department.name AS department FROM role JOIN department WHERE role.department_id = department.id",
        function (err, results) {
          console.table(results);
        }
      );
    } else if (data.userChoice === "View all employees") {
      db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title AS role, role.salary, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id",
        function (err, results) {
          console.table(results);
        }
      );
    } else if (data.userChoice === "Add a department") {
      inquirer
        .prompt({
          type: "input",
          message: "Enter the name of the department",
          name: "newDepartment",
        })
        .then((response) => {
          db.query(
            "INSERT INTO department (name) VALUES (?)",
            response.newDepartment,
            function (err, results) {
              console.log("Departments updated!");
            }
          );
        });
    } else if (data.userChoice === "Add a role") {
      inquirer.prompt(newRoleQuestions).then((response) => {
        db.query(
          "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
          (response.newRole, response.newSalary, response.newRoleDepartment),
          function (err, results) {
            console.log("New role added!");
          }
        );
      });
    } else if (data.userChoice === "Add an employee") {
      inquirer.prompt(newEmployeeQuestions).then((response) => {
        console.log(response);
      });
    }
  });
}

init();
