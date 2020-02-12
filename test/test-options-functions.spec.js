const fetchMock = require('../__mocks__/node-fetch');
const testData = require('./test-data');
const optFunctions = require('../lib/options-functions');

fetchMock.config.sendAsJson = false;
fetchMock.config.overwriteRoutes = true;

fetchMock
  .mock('https://nodejs.org/api/path.html', 200)
  .mock('https://www.meetup.com/es-ES/LimaJS/events/265160398/', 200)
  .mock('https://developer.moziles/docs/Glossary/Callback_function', 400)
  .mock('https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises', 200)
  .mock('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import', 200)
  .mock('https://nodejs.org/en/', 200)
  .mock('https://nodejs.org/docs/latest-v0.10.x/api/modules.html', 200)
  .mock('https://nodejs.org/api/fs.html', 200)
  .mock('https://nodejs.org/api/path.html', 200)
  .mock('https://docs.npmjs.com/misc/scripts', 200)
  .mock('https://se/', 400)
  .mock('https://jfsfsfestjs.io/', 400)
  .mock('https://medium.com/@lupoool-primeros-pasos-a934515174fb', 404)

describe('test to http request using node-fetch library', () => {
  it('should return an array of objects with five properties : href, text, file, status and message ', () => {
    return optFunctions.validateLinks(testData.arrayThree).then((data) => {
      expect(data).toEqual(testData.arrayFive);
    });
  });
  it('should return an array of objects with five properties : href, text, file, status and message ', () => {
    return optFunctions.validateLinks(testData.linkBadIn).then((data) => {
      expect(data).toEqual(testData.linkBadOut);
    });
  });
  it('should return an array of objects with five properties - catch : href, text, file, status and message ', () => {
    return optFunctions.validateLinks(testData.linkNotFoundIn).catch(() => {
      expect().toEqual(testData.linkNotFoundOut);
    });
  });
});

describe('test to check if options.validate = true and call to the function that validate links', () => {
  it('should return an array of objects with five properties if the options.validate = true', () => {
    return optFunctions.isValidate(testData.arrayOfArrays, { validate: true }).then((data) => {
      expect(data).toEqual(testData.arrayValidate);
    });
  });

  it('should return an array of objects with three properties if the options.validate = true', () => {
    expect(optFunctions.isValidate(testData.arrayOfArrays, { validate: false }))
      .toStrictEqual(testData.arrayNoValidate);
  });
});

describe('test to chekckout input on CLI', () => {
  it('should return an array with links', () => {
    expect(optFunctions.printStatsLinks(testData.arrayThree)).toMatch('');
  });
  it('should return an array with links', () => {
    expect(optFunctions.printLinks(testData.arrayThree)).toMatch('');
    expect(optFunctions.printLinks([])).toMatch('No existen archivos Markdown en esa ruta');
  });
  it('should return an array with links', () => {
    expect(optFunctions.printValidate(testData.arrayFive)).toMatch('');
    expect(optFunctions.printValidate([])).toMatch('No existen archivos Markdown en esa ruta');
  });
  it('should return an array with links', () => {
    expect(optFunctions.printStatsAndValidate(testData.arrayThree)).toMatch('');
    expect(optFunctions.printStatsAndValidate([])).toMatch('No existen archivos Markdown en esa ruta');
  });
});
