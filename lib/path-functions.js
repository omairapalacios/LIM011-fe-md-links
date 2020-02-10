const path = require('path');
const fs = require('fs');
const util = require('util');
const md = require('markdown-it')();
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const isPathAbsolute = (inputPath) => (path.isAbsolute(inputPath));

const convertAbsolute = (inputPath) => (path.resolve(inputPath));

const isFileMarkdown = (inputPath) => (path.extname(inputPath));

const existsPath = (inputPath) => (fs.existsSync(inputPath));

function checkStatsPath(inputPath) {
  const stat = util.promisify(fs.stat);
  return stat(inputPath);
}

function readDirectory(inputPath) {
  const directory = util.promisify(fs.readdir);
  return directory(inputPath);
}

function readFile(inputPath) {
  const contentFile = util.promisify(fs.readFile);
  return contentFile(inputPath, 'utf8');
}

function getFilesMd(inputPath) {
  let array = [];
  return checkStatsPath(inputPath)
    .then((stats) => {
      if (stats.isFile() && isFileMarkdown(inputPath) === '.md') {
        array.push(inputPath);
      }
      if (stats.isDirectory()) {
        const arrayPromises = [];
        return readDirectory(inputPath)
          .then((content) => {
            const newContent = content.map((elem) => path.join(inputPath, elem));
            newContent.forEach((elem) => {
              arrayPromises.push(getFilesMd(elem));
            });
            return Promise.all(arrayPromises)
              .then((value) => {
                value.forEach((elem) => {
                  array = array.concat(elem);
                });
                return array;
              });
          });
      } return array;
    })
    .catch((error) => error);
}


function extractLinks(inputPath, content) {
  const convertHtml = md.render(content);
  const arrayLink = [];
  const frag = JSDOM.fragment(convertHtml);
  frag.querySelectorAll('a').forEach((a) => {
    const objLink = {
      path: inputPath,
      href: a.href,
      text: a.textContent,
    };
    arrayLink.push(objLink);
  });
  return arrayLink;
}

const pathFunctions = {
  isPathAbsolute: isPathAbsolute,
  convertAbsolute: convertAbsolute,
  checkStatsPath: checkStatsPath,
  readDirectory: readDirectory,
  readFile: readFile,
  isFileMarkdown: isFileMarkdown,
  existsPath: existsPath,
  getFilesMd: getFilesMd,
  extractLinks: extractLinks,
};

module.exports = pathFunctions;
