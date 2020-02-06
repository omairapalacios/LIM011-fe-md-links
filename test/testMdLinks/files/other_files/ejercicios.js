const path = require('path');
const fs = require('fs');
const util = require('util');
const md = require('markdown-it')();

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const checkPathAbsolute = (inputPath) => (path.isAbsolute(inputPath));

const convertAbsolute = (inputPath) => (path.resolve(inputPath));

const existsPath = (inputPath) => (fs.existsSync(inputPath));

const joinPath = (inputPath, elemPath) => (path.join(inputPath, elemPath));
/*
const isAbsolute = (inputPath) => {
  if (!path.isAbsolute(inputPath)) {
    const resolve = path.resolve(inputPath);
    return resolve;
  }
  return inputPath;
}; */


// isAbsolute('li');
function checkTypePath(inputPath) {
  const stat = util.promisify(fs.stat);
  return stat(inputPath);
  /* stat(inputPath);
    .then((stats) => stats.isDirectory())
    .catch((error) => error); */
}

/* function checkPathFile(inputPath) {
  const stat = util.promisify(fs.stat);
  return stat(inputPath);
  // stat(inputPath)
  //   .then((stats) => stats.isDirectory())
  //   .catch((error) => error);
} */

function readDirectory(inputPath) {
  const directory = util.promisify(fs.readdir);
  return directory(inputPath);
  // directory(inputPath)
  //   .then((files) => {
  //     console.log(files);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
}

function readFile(inputPath) {
  const contentFile = util.promisify(fs.readFile);
  return contentFile(inputPath, 'utf8');
  /* file(inputPath, encoding)
    .then((content) => {
      console.log(typeof (content));
      console.log(content);
    })
    .catch((error) => {
      console.log(error);
    }); */
}

/* function isMarkdown(inputPath) {
  const extension = path.extname(inputPath);
  console.log(extension === '.md');
  return (extension === '.md');
}
*/

function extractLinks(inputPath, content) {
  const convertHtml = md.render(content);
  console.log(convertHtml);
  const frag = JSDOM.fragment(convertHtml);
  frag.querySelectorAll('a').forEach((a) => {
    console.log('');
    console.log('path:', inputPath);
    console.log('href:', a.href);
    console.log('text:', a.textContent);
  });
}

// ---------------------------------------------
// const result = linkify.match(convertHtml);
// console.log(convertHtml);
// result.forEach((link) => {
//   console.log(link);
//   console.log(link.url);
//   console.log(path.parse(link.url));
// });
// ----------------------------------------------
// return result;

function isMarkdown(inputPath) {
  return path.extname(inputPath);
  // if (extension === '.md') {
  //   return true;
  // readFile(inputPath, encoding)
  //   .then((content) => {
  //     extractLinks(inputPath, content);
  //   });
}

// isMarkdown('/home/omairapalacios/My_Projects/LIM011-fe-md-links/README.md', 'utf8');
const modules = {
  checkPathAbsolute: checkPathAbsolute,
  convertAbsolute: convertAbsolute,
  // checkDirectory: checkDirectory,
  // checkPathDirectory: checkPathDirectory,
  checkTypePath: checkTypePath,
  readDirectory: readDirectory,
  readFile: readFile,
  isMarkdown: isMarkdown,
  existsPath: existsPath,
  joinPath: joinPath,
};

module.exports = modules;

// PROBANDO FUNCIONES SINCRONAS NODE JS ---------------------------------------
/* function checkPathDirectory(inputPath) {
  const result = fs.statSync(inputPath);
  console.log(result.isDirectory());
  return result.isDirectory();
} */

/* function checkPathFile(inputPath) {
  const result = fs.statSync(inputPath);
  console.log(result.isFile());
  return result.isFile();
} */
// checkPathFile('index.js');
// checkPathDirectory('/home/omairapalacios/My_Projects/LIM011-fe-md-links');
// -----------------------------------------------------------------------------

// CONVIERTIENDO CALLBACKS A PROMESAS-------------------------------------------
/* function checkPathDirectory(inputPath) {
  return new Promise((resolve, reject) => {
    fs.stat(inputPath, (error, stats) => {
      if (error) reject(error);
      resolve(stats);
    });
  });
}

// function checkDirectory() {
//   checkPathDirectory(inputPath)
//     .then((stats) => console.log(stats.isDirectory()))
//     .catch((error) => console.log(error));
// .then((stats) => {
//   stats.isDirectory();
// })
// .catch((error) => error);
// }

function checkPathFile(inputPath) {
  return new Promise((resolve, reject) => {
    fs.stat(inputPath, (error, stats) => {
      if (error) reject(error);
      resolve(stats);
    });
  });
} */

/*-------------------------------------------------------------------------------
// PRACTICANDO PROMESAS
const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve('promesa resuelta');
  } else {
    reject(new Error('promesa no se pudo resolver'));
  }
});

promesa
  .then((response) => {
    setTimeout(() => { console.log('response', response); }, 2000);
  })
  .catch((error) => {
    console.log('response', error);
  });
  ------------------------------------------------------------------------------
*/
