const path = require('path');

const pathFunctions = require('../lib/path-functions');

const content = '[Jest](https://jestjs.io/)';

const arrayToTest = [{
  href: 'https://jestjs.io/',
  path: path.join(process.cwd(), 'README.md'),
  text: 'Jest',
}];

const arrayPathMd = [path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md')];

describe('test for functions with path module', () => {
  it('should return true if path is absolute', () => {
    expect(pathFunctions.isPathAbsolute(process.cwd())).toBe(true);
  });

  it('should return absolute path', () => {
    expect(pathFunctions.convertAbsolute('.')).toBe(process.cwd());
  });

  it('should return true if path exists ', () => {
    expect(pathFunctions.existsPath(process.cwd())).toBe(true);
  });

  it('should return .md extension ', () => {
    expect(pathFunctions.isFileMarkdown(path.join(process.cwd(), 'test', 'testMdLinks', 'README.md'))).toBe('.md');
  });

  it('should return an array with links', () => {
    expect(pathFunctions.extractLinks(path.join(process.cwd(), 'README.md'), content)).toEqual(arrayToTest);
  });
});

describe('test for functions with fs module', () => {
  it('should resolve promise if path is directory', (done) => {
    expect.assertions(1);
    return pathFunctions.checkStatsPath(process.cwd())
      .then((stats) => {
        expect(stats.isDirectory()).toBe(true);
        done()
      });
  });

  it('should resolve promise if path is file', (done) => {
    expect.assertions(1);
    return pathFunctions.checkStatsPath(path.join(process.cwd(), 'test', 'testMdLinks', 'README.md'))
      .then((stats) => {
        expect(stats.isFile()).toBe(true);
        done()
      });
  });

  it('should resolve and return directory content ', (done) => {
    expect.assertions(1);
    return pathFunctions.readDirectory(path.join(process.cwd(), 'test', 'testMdLinks'))
      .then((files) => {
        expect(files).toEqual(['README.md', 'files']);
        done()
      });
  });
  it('should resolve and return file content ', (done) => {
    expect.assertions(1);
    return pathFunctions.readFile(path.join(process.cwd(), 'test', 'testMdLinks', 'README.md'), 'utf8')
      .then((text) => {
        expect(text).toMatch('');
        done()
      });
  });
});

describe('test for the function that get files md - recursive', () => {
  expect.assertions(1);
  it('should resolve and return a array with paths of files .md', (done) => {
    return pathFunctions.getFilesMd(path.join(process.cwd(), 'test', 'testMdLinks', 'files'))
      .then((array) => {
        expect(array).toStrictEqual(arrayPathMd);
        done()
      });
  });

  it('should resolve and return a wrong path', () => {
    return pathFunctions.getFilesMd('?')
      .catch((err) => {
        expect(err).toMatch('');
      });
  });
});
