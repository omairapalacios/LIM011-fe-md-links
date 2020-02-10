#!/usr/bin/env node
const pathFunctions = require('./path-functions');
const mdLinks = require('./cli-options');

const path = process.argv[2];
const [,,, argvs] = process.argv;
const options = {
  validate: false,
  stats: false,
};

if (path) {
  if (pathFunctions.existsPath(path)) {
    if (argvs) {
      if ((argvs).indexOf('--validate') !== -1 || (argvs).indexOf('--stats') !== -1) {
        process.argv.forEach((option) => {
          if (option === '--validate') {
            options.validate = true;
          } else if (option === '--stats') {
            options.stats = true;
          }
        });
        mdLinks(path, options)
          .then((resolve) => console.log(resolve))
          .catch((error) => console.log(error));
      } else {
        console.log('Opcion igresada no es correcta.\nIngrese: "--validate" y/ó "--stats"');
      }
    } else {
      mdLinks(path, options)
        .then((resolve) => console.log(resolve))
        .catch((error) => console.log(error));
    }
  } else {
    console.log('La ruta ingresada no existe');
  }
} else {
  console.log('Por favor ingrese una ruta');
}
