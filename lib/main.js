const modulos = require('./index');

function mdlinks(path, options) {
  let newArray = [];
  if (modulos.isPathAbsolute(path)) {
    const arrayPromises = [];
    if (modulos.existsPath(path)) {
      return modulos.getFilesMd(path)
        .then((paths) => {
          paths.forEach((pathMd) => {
            arrayPromises.push(modulos.readFile(pathMd)
              .then((contentMd) => modulos.extractLinks(pathMd, contentMd)));
          });
          return Promise.all(arrayPromises)
            .then((value) => {
              value.forEach((elem) => {
                newArray = newArray.concat(elem);
              });
              if (options.validate) {
                return modulos.validateLinks(newArray)
                  .then((value2) => value2);
              }
              return newArray;
            });
        })
        .catch((error) => console.log(error));
    }
    console.log('path es inválido o no existe');
  } else {
    const newPath = modulos.convertAbsolute(path);
    mdlinks(newPath, true);
  }
  return newArray;
}

module.exports = mdlinks;
