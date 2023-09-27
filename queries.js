//when "view all departments" show department names and ids
db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});
//when "view all roles" show job title, role id, department, and salary
db.query(
  "SELECT * FROM role JOIN department WHERE role.department_id = department.id",
  function (err, results) {
    console.log(results);
  }
);
//when "view all employees" show employee id, first name, last name, job title, department, salary, managers
db.query(
  "SELECT * FROM employee JOIN role WHERE employee.role_id = role.id",
  function (err, results) {
    console.log(results);
  }
);
