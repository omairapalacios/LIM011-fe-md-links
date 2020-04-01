const testData = require('./test-data');
const optFunctions = require('../lib/options-functions');

describe('test to http request using node-fetch module', () => {
  it('should return an array of objects with five properties : href, text, file, status and message ', (done) => {
    expect.assertions(1);
    return optFunctions.validateLinks(testData.arrayObjThree).then((data) => {
      expect(data).toEqual(testData.arrayObjFive);
      done()
    });
  });
  it('should return an array of objects with five properties if the options.validate = true', (done)  => {
    expect.assertions(1);
    return optFunctions.isValidate(testData.arrayOfArrays, { validate: true }).then((data) => {
      expect(data).toEqual(testData.arrayValidate);
      done() 
    });
  });
  it('should return an array of objects with three properties if the options.validate = false', () => {
    expect(optFunctions.isValidate(testData.arrayOfArrays, { validate: false }))
      .toStrictEqual(testData.arrayNoValidate);
  });
});

describe('test to check the printing on CLI', () => {
  it('should return a string with stats : total links / total links uniques',  ()  => {
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
