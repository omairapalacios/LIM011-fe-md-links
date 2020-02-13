const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});
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

module.exports = fetchMock;