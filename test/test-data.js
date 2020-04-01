const path = require('path');

const arrayObjThree = [
  {
    href: 'https://nodejs.org/api/path.html',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Node.js',
  },
  {
    href: 'https://se/',
    path: path.join(process.cwd(), 'README.md'),
    text: 'server',
  },
];

const arrayObjFive = [
  {
    href: 'https://nodejs.org/api/path.html',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Node.js',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://se/',
    path: path.join(process.cwd(), 'README.md'),
    text: 'server',
    status: 'FAIL',
    message: 'NO FOUND',
  },
];

const arrayOfArrays = [[
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
  text: 'import',
}],
[{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/en/',
  text: 'Node.js',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
}]];

const arrayValidate = [
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
  text: 'import',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/en/',
  text: 'Node.js',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
  status: 'FAIL',
  message: 'NO FOUND',
}];


const arrayNoValidate = [
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
  text: 'import',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/en/',
  text: 'Node.js',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
}];

const testData = {
  arrayObjThree: arrayObjThree,
  arrayObjFive: arrayObjFive,
  arrayOfArrays: arrayOfArrays,
  arrayValidate: arrayValidate,
  arrayNoValidate: arrayNoValidate,
};
module.exports = testData;
