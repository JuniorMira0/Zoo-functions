/* eslint-disable comma-dangle */
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
console.log(isManager());

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const employeeName = employees.filter((employe) => employe.managers.includes(managerId));
    const fullName = employeeName.map((person) => `${person.firstName} ${person.lastName}`);
    return fullName;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
