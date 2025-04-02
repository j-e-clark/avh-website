const romans = require('romans');
const today = new Date().getFullYear();

module.exports = {
  buildYear: today,
  buildYearRoman: romans.romanize(today),
};
