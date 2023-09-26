INSERT INTO department (name)
VALUES ("Teaching"),
        ("Management"),
        ("Maintenance"),
        ("Corporate");

INSERT INTO role (title, salary, department_id)
VALUES ("2's Teacher", 38000, 1),
        ("3's Teacher", 38000, 1),
        ("Client Coordinator", 42500, 2),
        ("Center Director", 65000, 2),
        ("Weekend Cleaner", 17000, 3),
        ("District Manager", 85000, 4),
        ("Director of Talent", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Lily", "Smith", 1),
        ("Rex", "Michael", 7),
        ("Shelby", "Duffy", 6),
        ("Tom", "Brady", 2);
    