-- Insert some sample data into the department table
INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal'),
('Human Resources');
  
  
-- Insert some sample data into the role table
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
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
 ('Haziel', 'Michell', 1, 2),
  ('Hudson', 'Moore', 2, null),
  ('Rose', 'Garcia', 3, 4),
  ('Aron', 'Lee', 4, null),
  ('Mo', 'Tarek', 5, 6),
  ('Jasper', 'Allen', 6, null);
