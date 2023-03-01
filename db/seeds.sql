-- Insert some sample data into the department table
INSERT INTO department (department_name)
VALUES
  ('Engineering'),
  ('Tech'),
  ('Legal'),
  ('Finance'),
  ('Sales'),
  ('HR'), 
  ('Marketing');
  
  INSERT INTO role (title, salary, department_id)
VALUES
 ('Software Engineer', 40000, 1),
 ('Sales Lead', 160000, 3),
  ('Salesperson', 130000, 2),
  ('Recruiter ', 20000, 7),
  ('Marketer', 30000, 5),
  ('Attorney', 200000, 6),
  ('Engineer', 150000, 7),
  ('Accountant', 160000, 5),
  ('CEO', 400000, 5);

-- Insert some sample employees into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Haziel', 'Michell', 1, 1),
  ('Hudson', 'Moore', 2, 2),
  ('Rose', 'Garcia', 3, 1),
  ('Aron', 'Lee', 4, 3),
  ('Mo', 'Tarek', 5, 1),
  ('Jasper', 'Allen', 6, 3);
