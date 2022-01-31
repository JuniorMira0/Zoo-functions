// const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findSpecie = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === findSpecie).residents;

  const max = animals.reduce((prev, current) =>
    (prev.age > current.age ? prev : current));
  return Object.values(max);
}

getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f');
module.exports = getOldestFromFirstSpecies;

// requisito realizado com ajuda e supervisão de Lucas Cardoso - T05
