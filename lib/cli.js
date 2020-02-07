#!/usr/bin/env node

const mdlinks = require('./cli-options');

const path = process.argv[2];
const options = {
  validate: false,
  stats: false,
};

if (path) {
  process.argv.forEach((option) => {
    if (option === '--validate') {
      options.validate = true;
    } else if (option === '--stats') {
      options.stats = true;
    }
    mdlinks(path, options);
  });
} else {
  console.log('Por favor ingrese una ruta');
}
