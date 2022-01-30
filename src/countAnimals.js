/* eslint-disable comma-dangle */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  let result = 0;
  const specieCount = species.find(
    (specie) => specie.name === animal.specie
  ).residents;

  if (!animal.sex) {
    result = specieCount.length;
    return result;
  }
  result = specieCount.filter((specie) => specie.sex === animal.sex).length;
  return result;
}
console.log(countAnimals());

module.exports = countAnimals;

// requisito realizado com ajuda de Lucas Cardoso e Danilo
