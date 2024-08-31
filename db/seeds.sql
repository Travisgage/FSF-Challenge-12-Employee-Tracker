INSERT INTO department (name) VALUES 
('Engineering'),
('Research and Development'),
('Logistics');

INSERT INTO role (title, salary, department_id) VALUES 
('Engineer', 90000, 1),
('Analyst', 80000, 1),
('Driver', 70000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Ricky', 'Bobby', 7, NULL); 