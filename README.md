
<p align="center">
  <img width="90" src="utils/mdlinks-logo.png">
</p>
<h1 align="center"> md-links </h1>
<p align="center">
  <b >md-links es una librería de node.js para obtener links de archivos markdown</b>
</p>

## Descripción

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Md-links es una librería desarrollada con [Node.js](https://nodejs.org/), que permite leer y analizar archivos
en formato `Markdown` existentes en una ruta, para verificar los links que contengan y generar
algunas estadísticas.

## Instalación

Versión estable:
```sh
$ npm i omairapalacios/md-links
```
```sh
$ npm i --global omairapalacios/md-links
```

## Guía de Uso

### Utilizalo como módulo:

````javascript
const mdlinks = require('mdlinks');
````
##### Por ejemplo:

```js
mdlinks("./some/example.md", { validate: false })
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdlinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);
```
Revisa la documentación técnica para más ejemplos en [API](/docs/typescript.md).

### A través de la linea de comandos:

````sh
$ md-links <path-to-file> {options};
````

##### Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md https://jestjs.io/ Testing con jest
./some/example.md https://es.reactjs.org/ Librería
./some/example.md https://es.wikipedia.org/ Wikipedia
```

```sh
$ md-links ./some/example.md --validate
./some/example.md https://jestjs.io/ 200 Ok Testing con jest 
./some/example.md https://es.reactjs.org/ 200 Ok Librería 
./some/example.md https://es.wikipedia.org/ 400 Fail Wikipedia
```
Revisa la documentación técnica para más ejemplos en [CLI](/docs/typescript.md).

### LICENCIA

Licencia Copyright (c) 2020, Omaira Palacios (Licencia MIT) [Licencia](LICENSE).

