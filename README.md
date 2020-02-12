
<p align="center">
  <img width="90" src="utils/mdlinks-logo.png">
</p>
<h1 align="center">MD-LINKS</h1>
<p align="center">
 
</p>

>md-links es una librería desarrollada con Node.js para obtener links de archivos markdown : https://cpalaciosanchez.gitbook.io/md-links/


## Descripción

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md)

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

md-links es una librería desarrollada con [Node.js](https://nodejs.org/), que permite leer y analizar archivos en formato `Markdown` dada una ruta, extrae los links que contengan y generar
algunas estadísticas.

Revisa la planificación del [proyecto](https://github.com/omairapalacios/LIM011-fe-md-links/projects)y el [diagrama de flujo](https://github.com/omairapalacios/LIM011-fe-md-links/blob/master/utils/Diagrama_Mdlinks.svg).


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
Revisa la documentación técnica para más ejemplos en [API](https://app.gitbook.com/@cpalaciosanchez/s/md-links/~/drafts/-M-sT4KG7g-CvWSTihyB/).

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
Revisa la documentación técnica para más ejemplos en [CLI](https://app.gitbook.com/@cpalaciosanchez/s/md-links/~/drafts/-M-sT4KG7g-CvWSTihyB/cli-md-links).

### LICENCIA

Licencia Copyright (c) 2020, Omaira Palacios (Licencia MIT) [Licencia](https://github.com/omairapalacios/LIM011-fe-md-links/blob/master/LICENSE).

