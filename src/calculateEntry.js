const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantObj.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      entrantObj.adult += 1;
    } else entrantObj.senior += 1;
  });
  return entrantObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrada = countEntrants(entrants);
  let value = 0;

  value += entrada.child * prices.child;
  value += entrada.adult * prices.adult;
  value += entrada.senior * prices.senior;
  return value;
}

module.exports = { calculateEntry, countEntrants };

// requisito realizado com ajuda de Lucas Cardoso e Marcos Campos - 19B
