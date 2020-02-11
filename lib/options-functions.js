const fetch = require('node-fetch');

// functions to handle options

function validateLinks(arrayObjlinks) {
  let arrayPromises = [];
  arrayPromises = arrayObjlinks.map((objLink) => fetch(objLink.href)
    .then((response) => {
      if(response.status >= 200 && response.status <= 399){
        return {
          ...objLink,
          status: response.status,
          message: response.statusText,
        }
      } else if (response.status >= 400)
        return {
          ...objLink,
          status: response.status,
          message: response.statusText,
        }
    })
    .catch((e) => ({
      ...objLink,
      status: 400,
      message: e.message,
    })));
  return Promise.all(arrayPromises);
}

function isValidate(arrayOfArray, options) {
  let newArray = [];
  arrayOfArray.forEach((array) => {
    newArray = newArray.concat(array);
  });
  if (options.validate === true) {
    return validateLinks(newArray)
      .then((objOfFive) => objOfFive);
  }
  return newArray;
}

function printStatsLinks(arrayObjlinks) {
  const totalLinks = arrayObjlinks.length;
  const arrayUniqueLinks = new Set();
  arrayObjlinks.forEach((objLink) => {
    arrayUniqueLinks.add(objLink.href);
  });
  const totalUniqueLinks = arrayUniqueLinks.size;
  const stats = `Total: ${totalLinks}\nUnique: ${totalUniqueLinks}`;
  return stats;
}

// functions to print results

function printLinks(arrayObjlinks) {
  let objOfThree = '';
  if (arrayObjlinks.length > 0) {
    arrayObjlinks.forEach((elem) => {
      objOfThree += `${elem.path} ${elem.href} ${elem.text}\n`;
    });
  } if (arrayObjlinks.length === 0) {
    return 'No existen archivos Markdown en esa ruta';
  }
  return objOfThree;
}

function printValidate(arrayObjlinks) {
  let objOfFive = '';
  if (arrayObjlinks.length > 0) {
    arrayObjlinks.forEach((elem) => {
      objOfFive += `${elem.path} ${elem.href} ${elem.message} ${elem.status} ${elem.text}\n`;
    });
  } if (arrayObjlinks.length === 0) {
    return 'No existen archivos Markdown en esa ruta';
  }
  return objOfFive;
}

function printStatsAndValidate(arrayObjlinks) {
  let stats = '';
  let brokenLinks = [];
  if (arrayObjlinks.length > 0) {
    brokenLinks = arrayObjlinks.filter((elem) => (elem.status === 400));
  } if (arrayObjlinks.length === 0) {
    return 'No existen archivos Markdown en esa ruta';
  }
  stats = `${printStatsLinks(arrayObjlinks)}\nBroken: ${brokenLinks.length}`;
  return stats;
}

const optFunctions = {
  validateLinks: validateLinks,
  isValidate: isValidate,
  printStatsLinks: printStatsLinks,
  printValidate: printValidate,
  printStatsAndValidate: printStatsAndValidate,
  printLinks: printLinks,
};

module.exports = optFunctions;
