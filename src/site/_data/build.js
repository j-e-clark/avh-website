const roman = require('romans');
const today = new Date().getFullYear();

module.exports = {
  buildYear: today,
  buildYearRoman: roman.romanize(today),
};
