# [sergiosanz.dev](https://sergiosanz.dev/)

Proyecto realizado en Gatsby para alojar mi sitio web personal sobre desarrollo web. [Más información](https://sergiosanz.dev/blog/nueva-web/).

## Instalación

Para ejecutar el proyecto con fines de desarrollo es necesario tener instalado en el equipo [Node.js](https://nodejs.org/).

Clona el repositorio y ejecuta `npm install` para descargar las depencencias necesarias. Una vez instaladas ejecuta `npm run develop` para iniciar la aplicación en modo desarrollo.

## Estructura

El código del proyecto está distribuido esencialmente en la carpeta `src`, donde se encuentran los siguientes directorios:

* **assets**: archivos estáticos que se utilizan en el diseño como imágenes.
* **components**: componentes de React.
* **hooks**: _hooks_ personalizados de React que emplean algunos componentes.
* **images**: imágenes utilizadas en los artículos o como _thumbnails_.
* **pages**: páginas cargadas por Gatsby al solicitar su _slug_ vía URL.
* **posts**: archivos Markdown que incluyen el contenido de los artículos.
* **styles**: ficheros SASS que se compilan para formar los estilos de la página.
* **templates**: páginas que actúan como plantillas para los archivos Markdown.

Además de estas carpetas, en la raíz del proyecto se encuentran los ficheros `gatsby-config.js` (con la configuración de la página y los plugins) y `gatsby-node.js` (donde se guardan las instrucciones de cómo debe construirse el sitio).

## Tecnologías

* [Gatsby](https://www.gatsbyjs.com/) - Constructor de sitios estáticos
* [React](https://reactjs.org/) - Librería para crear componentes
* [GraphQL](https://graphql.org/) - Lenguaje de consultas

© 2020 Sergio Sanz
