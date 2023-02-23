-- Insert some sample data into the department table
INSERT INTO department (department_name)
VALUES
  ('HR'),
  ('Tech'),
  ('Marketing'),
  ('Finance'),
  ('Sales'),
  ('Engineering'),
  ('Legal');
  
  INSERT INTO role (title, salary, department_id)
VALUES
 ('Software Engineer', 40000, 2),
 ('Sales Lead', 160000, 5),
  ('Salesperson', 130000, 5),
  ('Recruiter ', 20000, 1),
  ('Marketer', 30000, 3),
  ('Attorney', 200000, 7),
  ('Engineer', 150000, 6),
  ('Accountant', 160000, 7),
  ('CEO', 400000, 5);

-- Insert some sample employees into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Haziel', 'Michell', 1, 4),
  ('Hudson', 'Moore', 2, 1),
  ('Rose', 'Garcia', 3, 2),
  ('Aron', 'Lee', 4, 3),
  ('Mo', 'Tarek', 5, 7),
  ('Jasper', 'Allen', 6, 5);