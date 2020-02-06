#!/usr/bin/env node

const mdlinks = require('./main');

const path = process.argv[2];
const [,, ...options] = process.argv;


if (path) {
  mdlinks(path, options)
    .then((array) => console.log(array));
}
console.log('Por favor ingrese una ruta');
