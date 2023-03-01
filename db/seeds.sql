-- Insert some sample data into the department table
INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');
  
  
--Insert some sample data into the role table

  INSERT INTO role (title, salary, department_id)
INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Sales Lead', 100000, 1),
('Engineer', 120000, 2),
('Lead Engineer', 150000, 2),
('Accountant', 125000, 3),
('Chief Financial Officer', 300000, 3),
('Lawyer', 190000, 4),
('Legal Team Lead', 250000, 4),
('Human Resources Employee', 80000, 5),
('Human Resources Director', 100000, 5);


-- Insert some sample employees into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Haziel', 'Michell', 1, 1),
  ('Hudson', 'Moore', 2, 2),
  ('Rose', 'Garcia', 3, 1),
  ('Aron', 'Lee', 4, 3),
  ('Mo', 'Tarek', 5, 1),
  ('Jasper', 'Allen', 6, 3);
