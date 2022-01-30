const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// função para ordenar
function order(sort, arr) {
  if (sort === true) {
    return arr.sort();
  }
  return arr;
}
// ------- //

function animalsByKey(key) {
  const objByKey = {};
  species.forEach((specie) => {
    if (objByKey[specie[key]]) {
      objByKey[specie[key]].push(specie.name);
    } else {
      objByKey[specie[key]] = [specie.name];
    }
  });
  return objByKey;
}

function animalsInclud(key, sort) {
  const includObj = {};
  species.forEach((specie) => {
    if (includObj[specie[key]]) {
      includObj[specie[key]].push({
        [specie.name]: order(sort, specie.residents.map(({ name }) => name)),
      });
    } else {
      includObj[specie[key]] = [
        { [specie.name]: order(sort, specie.residents.map(({ name }) => name)) },
      ];
    }
  });
  return includObj;
}
// console.log(animalsInclud('location'));

function animalsBySex(key, sort, animalSex) {
  const objBySex = {};
  species.forEach((specie) => {
    if (objBySex[specie[key]]) {
      objBySex[specie[key]].push({
        [specie.name]: order(sort, specie.residents
          .filter(({ sex }) => sex === animalSex)
          .map(({ name }) => name)),
      });
    } else {
      objBySex[specie[key]] = [
        { [specie.name]: order(sort, specie.residents
          .filter(({ sex }) => sex === animalSex)
          .map(({ name }) => name)) },
      ];
    }
  });
  return objBySex;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animalsByKey('location');
  }
  if (options.sex) {
    return animalsBySex('location', options.sorted, options.sex);
  }
  if (options.includeNames) {
    return animalsInclud('location', options.sorted);
  }
}

module.exports = getAnimalMap;
