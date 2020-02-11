const path = require('path');

const arrayThree = [
  {
    href: 'https://nodejs.org/api/path.html',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Node.js',
  },
  {
    href: 'https://www.meetup.com/es-ES/LimaJS/events/265160398/',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Meetup',
  },
  {
    href: 'https://developer.moziles/docs/Glossary/Ca',
    path: path.join(process.cwd(), 'README.md'),
    text: 'MDN',
  },
];

const arrayFive = [
  {
    href: 'https://nodejs.org/api/path.html',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Node.js',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://www.meetup.com/es-ES/LimaJS/events/265160398/',
    path: path.join(process.cwd(), 'README.md'),
    text: 'Meetup',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://developer.moziles/docs/Glossary/Ca',
    path: path.join(process.cwd(), 'README.md'),
    text: 'MDN',
    status: 400,
    message: 'Bad Request',
  },
];

const arrayOfArrays = [[{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href: 'https://developer.moziles/docs/Glossary/Ca',
  text: 'Uso de callbacks',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
  text: 'Consumo de Promesas',
},
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
  href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  text: 'módulos (CommonJS)',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/fs.html',
  text: 'file system',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/path.html',
  text: 'path',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://docs.npmjs.com/misc/scripts',
  text: 'npm-scripts',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
}]];

const arrayValidate = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href: 'https://developer.moziles/docs/Glossary/Ca',
  text: 'Uso de callbacks',
  status: 400,
  message: 'Bad Request',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
  text: 'Consumo de Promesas',
  status: 200,
  message: 'OK',
},
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
  href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  text: 'módulos (CommonJS)',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/fs.html',
  text: 'file system',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/path.html',
  text: 'path',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://docs.npmjs.com/misc/scripts',
  text: 'npm-scripts',
  status: 200,
  message: 'OK',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
  status: 400,
  message: 'Bad Request',
}];


const arrayNoValidate = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href: 'https://developer.moziles/docs/Glossary/Ca',
  text: 'Uso de callbacks',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'Readme.md'),
  href:
  'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
  text: 'Consumo de Promesas',
},
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
  href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  text: 'módulos (CommonJS)',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/fs.html',
  text: 'file system',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://nodejs.org/api/path.html',
  text: 'path',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://docs.npmjs.com/misc/scripts',
  text: 'npm-scripts',
},
{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
}];

const arrayWrongIn = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://se/',
  text: 'semver',
}];

const arrayWrongOut = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://s',
  text: 'semver',
  status: 400,
  message: 'Bad Request',
}];

const testData = {
  arrayThree: arrayThree,
  arrayFive: arrayFive,
  arrayOfArrays: arrayOfArrays,
  arrayValidate: arrayValidate,
  arrayNoValidate: arrayNoValidate,
  arrayWrongIn: arrayWrongIn,
  arrayWrongOut: arrayWrongOut,
};
module.exports = testData;
