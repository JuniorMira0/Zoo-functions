const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

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

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animalsByKey('location');
  }
}
console.log(getAnimalMap());

module.exports = getAnimalMap;
