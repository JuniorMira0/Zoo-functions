const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (employee) =>
      // eslint-disable-next-line comma-dangle
      employeeName === employee.firstName || employeeName === employee.lastName
  );
};

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
