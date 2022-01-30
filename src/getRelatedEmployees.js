/* eslint-disable comma-dangle */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
console.log(isManager());

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const employeeName = employees
      .filter((employe) => employe.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
    return employeeName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees());

module.exports = { isManager, getRelatedEmployees };
