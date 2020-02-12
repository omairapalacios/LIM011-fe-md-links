
const path = require('path');

const pathFunctions = require('../lib/path-functions');

const content = '[Jest](https://jestjs.io/)';

const array1 = [{
  href: 'https://jestjs.io/',
  path: path.join(process.cwd(), 'README.md'),
  text: 'Jest',
}];

const arraymd = [path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md')];

describe('test for functions with path library', () => {
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
    expect(pathFunctions.extractLinks(path.join(process.cwd(), 'README.md'), content)).toEqual(array1);
  });
});

describe('test for functions with fs library', () => {
  it('should resolve promise if path is directory', () => {
    return pathFunctions.checkStatsPath(process.cwd())
      .then((stats) => {
        expect(stats.isDirectory()).toBe(true);
      });
  });

  it('should resolve promise if path is file', () => {
    return pathFunctions.checkStatsPath(path.join(process.cwd(), 'test', 'testMdLinks', 'README.md'))
      .then((stats) => {
        expect(stats.isFile()).toBe(true);
      });
  });

  it('should resolve and return directory content ', () => {
    return pathFunctions.readDirectory(path.join(process.cwd(), 'test', 'testMdLinks'))
      .then((files) => {
        expect(files).toEqual(['README.md', 'files']);
      });
  });
  it('should resolve and return file content ', () => {
    return pathFunctions.readFile(path.join(process.cwd(), 'test', 'testMdLinks', 'README.md'), 'utf8')
      .then((text) => {
        expect(text).toMatch('');
      });
  });
});

describe('test for the function that get files md', () => {
  it('should resolve and return a array with paths of files .md', () => {
    return pathFunctions.getFilesMd(path.join(process.cwd(), 'test', 'testMdLinks', 'files'))
      .then((array) => {
        expect(array).toStrictEqual(arraymd);
      });
  });

  it('should resolve and return a wrong path', () => {
    return pathFunctions.getFilesMd('?')
      .catch((err) => {
        expect(err).toMatch();
      });
  });
});
