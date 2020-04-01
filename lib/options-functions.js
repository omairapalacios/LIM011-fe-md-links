const fetch = require('node-fetch');
const chalk = require('chalk');

// functions to handle options

const warning = chalk.keyword('orange');

function validateLinks(arrayObjlinks) {
  let arrayPromises = [];
  arrayPromises = arrayObjlinks.map((objLink) => fetch(objLink.href)
  .then((response) => {
    if (response.ok) {
      return {
        ...objLink,
        status: response.status,
        message: response.statusText,
      };
    }
      return {
        ...objlink,
        status: response.status,
        message: response.statusText,
      };
  })
  .catch(() => ({
    ...objLink,
    status: 'FAIL',
    message: 'NO FOUND',
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
  const stats = `${chalk.cyan('Total:')}${totalLinks}\n${chalk.cyan('Unique:')}${totalUniqueLinks}`;
  return stats;
}

// functions to print results

function printLinks(arrayObjlinks) {
  let objOfThree = '';
  if (arrayObjlinks.length > 0) {
    arrayObjlinks.forEach((elem) => {
      objOfThree += `PATH:${chalk.cyan(elem.path)} LINK: ${chalk.italic(chalk.yellow(elem.href))} TEXT: ${chalk.magenta(elem.text)}\n`;
    });
  } if (arrayObjlinks.length === 0) {
    return `${warning('No existen archivos Markdown en esa ruta')}`;
  }
  return objOfThree;
}

function printValidate(arrayObjlinks) {
  let objOfFive = '';
  if (arrayObjlinks.length > 0) {
    arrayObjlinks.forEach((elem) => {
      const changeColorMessage = elem.message == 'OK'? chalk.greenBright(elem.message) : chalk.red(elem.message);
      const changeColorStatus = elem.status == '200'? chalk.greenBright(elem.status) : chalk.red(elem.status);
      objOfFive += 
      `PATH:${chalk.cyan(elem.path)} LINK: ${chalk.italic(chalk.yellow(elem.href))} ${changeColorMessage} ${changeColorStatus} TEXT: ${chalk.magenta(elem.text)}\n`;
    });
  } if (arrayObjlinks.length === 0) {
    return `${warning('No existen archivos Markdown en esa ruta')}`;
  }
  return objOfFive;
}

function printStatsAndValidate(arrayObjlinks) {
  let stats = '';
  let brokenLinks = [];
  if (arrayObjlinks.length > 0) {
    brokenLinks = arrayObjlinks.filter((elem) => (elem.status === 400));
  } if (arrayObjlinks.length === 0) {
    return `${warning('No existen archivos Markdown en esa ruta')}`;
  }
  stats = `${printStatsLinks(arrayObjlinks)}\n${chalk.cyan('broken:')}${brokenLinks.length}`;
  return stats;
}

const optFunctions = {
  validateLinks,
  isValidate,
  printStatsLinks,
  printValidate,
  printStatsAndValidate,
  printLinks,
};

module.exports = optFunctions;
