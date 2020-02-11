const optFunctions = require('./options-functions');
const pathFunctions = require('./path-functions');

function mdLinks(path, options) {
  const newArray = [];
  if (pathFunctions.isPathAbsolute(path)) {
    const arrayPromises = [];
    return pathFunctions.getFilesMd(path)
      .then((paths) => {
        paths.forEach((pathMd) => {
          arrayPromises.push(pathFunctions.readFile(pathMd)
            .then((contentMd) => pathFunctions.extractLinks(pathMd, contentMd)));
        });
        return Promise.all(arrayPromises)
          .then((arrayOfArrays) => optFunctions.isValidate(arrayOfArrays, options));
      })
      .catch(() => 'path inválido');
  }
  const newPath = pathFunctions.convertAbsolute(path);
  mdLinks(newPath, options);
  return Promise.resolve(newArray);
}
module.exports = mdLinks;
