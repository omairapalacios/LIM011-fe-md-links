const mdlinks = require('./mdlinks');
const optFunctions = require('../lib/options-functions');

const checkOutOptions = (path, options) => {
  if (options.validate === true && options.stats === true) {
    return mdlinks(path, options)
      .then((array) => optFunctions.printStatsAndValidate(array));
  }
  if (options.validate === false && options.stats === true) {
    return mdlinks(path, options)
      .then((array) => optFunctions.printStatsLinks(array));
  }
  if (options.validate === true && options.stats === false) {
    return mdlinks(path, options)
      .then((array) => optFunctions.printValidate(array));
  }
  return mdlinks(path, options)
    .then((array) => optFunctions.printLinks(array));
};

module.exports = checkOutOptions;
