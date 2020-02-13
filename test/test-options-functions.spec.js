const fetchMock = require('../__mocks__/node-fetch');
const testData = require('./test-data');
const optFunctions = require('../lib/options-functions');

fetchMock.config.sendAsJson = false;
fetchMock.config.overwriteRoutes = true;

fetchMock
  .mock('https://nodejs.org/api/path.html', 200)
  .mock('https://developer.moziles/docs/Glossary/Callback_function', 400)
  .mock('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import', 200)
  .mock('https://nodejs.org/en/', 200)
  .mock('https://se/', 400)
  .mock('https://jfsfsfestjs.io/', 400)
  .mock('https://medium.com/@lupoool-primeros-pasos-a934515174fb', 400)

describe('test to http request using node-fetch module', () => {
  it('should return an array of objects with five properties : href, text, file, status and message ', () => {
    return optFunctions.validateLinks(testData.arrayObjThree).then((data) => {
      expect(data).toEqual(testData.arrayObjFive);
    });
  });
  it('should return an array of objects with five properties if the options.validate = true', () => {
    return optFunctions.isValidate(testData.arrayOfArrays, { validate: true }).then((data) => {
      expect(data).toEqual(testData.arrayValidate);
    });
  });
  it('should return an array of objects with three properties if the options.validate = false', () => {
    expect(optFunctions.isValidate(testData.arrayOfArrays, { validate: false }))
      .toStrictEqual(testData.arrayNoValidate);
  });
});

describe('test to check the printing on CLI', () => {
  it('should return a string with stats : total links / total links uniques', () => {
    expect(optFunctions.printStatsLinks(testData.arrayObjThree)).toMatch('');
  });
  it('should return a string: url, path, text', () => {
    expect(optFunctions.printLinks(testData.arrayObjThree)).toMatch('');
    expect(optFunctions.printLinks([])).toMatch('No existen archivos Markdown en esa ruta');
  });
  it('should return a string: url, path, text, status, message', () => {
    expect(optFunctions.printValidate(testData.arrayObjFive)).toMatch('');
    expect(optFunctions.printValidate([])).toMatch('No existen archivos Markdown en esa ruta');
  });
  it('should return a string with stats : total links / total links uniques / total broken links', () => {
    expect(optFunctions.printStatsAndValidate(testData.arrayObjThree)).toMatch('');
    expect(optFunctions.printStatsAndValidate([])).toMatch('No existen archivos Markdown en esa ruta');
  });
});
