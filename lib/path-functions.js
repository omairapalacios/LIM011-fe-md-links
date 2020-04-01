const path = require('path');
const fs = require('fs');
const util = require('util');
const md = require('markdown-it')();
const jsdom = require('jsdom');
const chalk = require('chalk');

const warning = chalk.keyword('orange');


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
            const newContent = content.map((pathFile) => path.join(inputPath, pathFile));
            newContent.forEach((newPath) => {
              arrayPromises.push(getFilesMd(newPath));
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
    .catch(() => console.log(`${warning('ruta no encontrada o inválida')}`));
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
  isPathAbsolute,
  convertAbsolute,
  checkStatsPath,
  readDirectory,
  readFile,
  isFileMarkdown,
  existsPath,
  getFilesMd,
  extractLinks,
};

module.exports = pathFunctions;
