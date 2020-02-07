const mdlinks = require('./main');

const checkOutOptions = (path, options) => {
  if (options.validate === false && options.stats === false) {
    return mdlinks(path, options)
      .then((array) => console.log(array));
  }
  if (options.validate === true && options.stats === true) {
    return mdlinks(path, { validate: true })
      .then((array) => console.log(array));
  }
  if (options.validate === false && options.stats === true) {
    return mdlinks(path, options)
      .then((array) => {
        console.log(array);
      });
  }
  if (options.validate === true && options.stats === false) {
    return mdlinks(path, options)
      .then((array) => {
        console.log(array);
      });
  }
};

module.exports = checkOutOptions;
