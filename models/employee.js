const { getAll, addItem } = require('../queries/queries');
const db = require('../config/db');

// Fetch all employees with their role, department, and manager details
const getAllEmployees = () => {
    return getAll(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary,
               CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employee e
        JOIN role r ON e.role_id = r.id
        JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
    `);
};

// Add new employee to DB
const addEmployee = (firstName, lastName, roleId, managerId) => {
    return addItem('employee', ['first_name', 'last_name', 'role_id', 'manager_id'], [firstName, lastName, roleId, managerId]);
};

// Update an employee role within DB
const updateEmployeeRole = (employeeId, newRoleId) => {
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *';
    return db.query(query, [newRoleId, employeeId]).then(result => result.rows[0]);
};

module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployeeRole
};
