
const path = require('path');
const fetchMock = require('../_mocks_/fetch.js');

const optFunctions = require('../lib/options-functions');

fetchMock
  .mock('https://nodejs.org/api/path.html', 200)
  .mock('https://github.com/workshopper/learnyounode', 200)
  .mock('https://developer.moziles/docs/Glossary/Ca', 400);

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
    message: 'FAIL',
  },
];

describe('test to validate validateLinks', () => {
  beforeEach(() => {
    fetchMock.reset();
  });
  it('should return an array of objects with five properties : href, text, file, status and message ', () => {
    expect.assertions(1);
    return optFunctions.validateLinks(arrayThree).then((data) => {
      expect(data).toEqual(arrayFive);
    });
  });
});
