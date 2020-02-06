
require('jest-fetch-mock').enableMocks();
const fetch = require('node-fetch');

const modules = require('../lib/index');

const pathFile = '/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md';

const pathDirectory = '/home/omairapalacios/My_Projects/LIM011-fe-md-links/';

const content = '[Jest](https://jestjs.io/)';

const array1 = [{
  href: 'https://jestjs.io/',
  path: '/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md',
  text: 'Jest',
}];

const array2 = [
  {
    href: 'https://jestjs.io/',
    message: 'OK',
    path: '/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md',
    status: 200,
    text: 'Jest',
  },
];

const array3 = [
  {
    href: 'https://jestjs.io/',
    message: 'FAIL',
    path: '/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md',
    status: 400,
    text: 'Jest',
  },
];

const array4 = [
  {
    href: 'https://jestjs.io/',
    message: 'FAIL',
    path: '/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md',
    status: 301,
    text: 'Jest',
  },
];

const arraymd = ['/home/omairapalacios/My_Projects/LIM011-fe-md-links/test/testMdLinks/files/Readme.md',
  '/home/omairapalacios/My_Projects/LIM011-fe-md-links/test/testMdLinks/files/other_files/README.md'];

describe('test for functions with path library', () => {
  it('should return true if path is absolute', () => {
    expect(modules.isPathAbsolute('/home/omairapalacios/My_Projects/')).toBe(true);
  });

  it('should return absolute path', () => {
    expect(modules.convertAbsolute('.')).toBe(process.cwd());
  });

  it('should return true if path exists ', () => {
    expect(modules.existsPath(process.cwd())).toBe(true);
  });

  it('should return .md extension ', () => {
    expect(modules.isFileMarkdown(pathFile)).toBe('.md');
  });

  it('should join paths', () => {
    expect(modules.joinPath(pathDirectory, 'README.md')).toBe(pathFile);
  });

  it('should return a array with links', () => {
    expect(modules.extractLinks(pathFile, content)).toEqual(array1);
  });
});

describe('test for functions with fs library', () => {
  test('should resolve promise if path is directory', () => {
    return modules.checkStatsPath('/home/omairapalacios/My_Projects/')
      .then((stats) => {
        expect(stats.isDirectory()).toBe(true);
      });
  });

  test('should resolve promise if path is file', () => {
    return modules.checkStatsPath('README.md')
      .then((stats) => {
        expect(stats.isFile()).toBe(true);
      });
  });

  test('should resolve and return directory content ', () => {
    return modules.readDirectory(`${pathDirectory}/test`)
      .then((files) => {
        expect(files).toEqual(['test.spec.js', 'testMdLinks']);
      });
  });
  test('should resolve and return file content ', () => {
    return modules.readFile(`${pathDirectory}/lib/index.js`, 'utf8')
      .then((text) => {
        expect(text).toMatch('');
      });
  });
});


describe('test for http request', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should calls a link and returns estatus = 200 - promise resolve', () => {
    fetch.mockResponseOnce(JSON.stringify(array2[0]));
    modules.validateLinks(array1).then((res) => {
      expect(res[0].status).toEqual(200);
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://jestjs.io/');
  });

  it('should calls a link and returns status = 400 - promise reject', () => {
    fetch.mockRejectOnce(JSON.stringify(array3[0]));
    modules.validateLinks(array3).catch((res) => {
      expect(res[0].status).toEqual(400);
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://jestjs.io/');
  });
});


describe('test for the function that get files md', () => {
  it('should resolve and return a array with paths of files md', () => {
    return modules.getFilesMd(`${pathDirectory}/test/testMdLinks/files`)
      .then((array) => {
        expect(array).toStrictEqual(arraymd);
      });
  });

  it('should resolve and return a with a wrong path', () => {
    return modules.getFilesMd('?')
      .catch((err) => {
        expect(err).toMatch();
      });
  });
});
