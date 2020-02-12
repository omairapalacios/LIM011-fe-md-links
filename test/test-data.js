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

const linkBadIn = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://medium.com/@lupoool-primeros-pasos-a934515174fb',
  text: 'link roto',
}];

const linkBadOut = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://medium.com/@lupoool-primeros-pasos-a934515174fb',
  text: 'link roto',
  status: 'FAIL',
  message: 'NO FOUND',
}];


const linkNotFoundIn = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://jfsfsfestjs.io/',
  text: 'link not found',
}];

const linkNotFoundOut = [{
  path: path.join(process.cwd(), 'test', 'testMdLinks', 'files', 'other_files', 'README.md'),
  href: 'https://medium.com/@lupoool-primeros-pasos-a934515174fb',
  text: 'link not found',
  status: 'No status',
  message: 'ENOTFOUND',
}];

const testData = {
  arrayThree: arrayThree,
  arrayFive: arrayFive,
  arrayOfArrays: arrayOfArrays,
  arrayValidate: arrayValidate,
  arrayNoValidate: arrayNoValidate,
  linkBadIn: linkBadIn,
  linkBadOut: linkBadOut,
  linkNotFoundIn:linkNotFoundIn,
  linkNotFoundOut:linkNotFoundOut,
};
module.exports = testData;
