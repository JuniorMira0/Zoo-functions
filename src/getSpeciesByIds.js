// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((especie) => especie.id === id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
