---
title: '12 buenas prácticas de HTML y CSS'
date: '2018-12-01'
thumbnail: '../../images/html-css.png'
---

Escribir código es fácil, lo difícil **es escribir un código de calidad que sea limpio y ordenado**. Para lograr este objetivo se necesita metodología, que se adquiere con la experiencia. Por lo general este proceso conlleva práctica y mucho tiempo, resultando muchas veces abrumador. Afortunadamente existen una serie de buenas prácticas que pueden orientarnos (sobre todo cuando estamos empezando) y que me han ayudado mucho a empezar.

En este artículo concretamente veremos **12 buenas prácticas de HTML y CSS** muy fáciles de aplicar y que mejorarán la calidad de nuestro código.

## Link mejor que @import

Para incluir hojas de estilo a nuestro HTML, lo mejor es utilizar las etiquetas link que proporciona el propio lenguaje. Ten en **cuenta que cuantas más hojas importes más tardará la página en cargar**.

## Usa clases en vez de ids

Las `id` no aportan ninguna ventaja más allá de que no se pueden (o no deberían) repetirse. A la hora de aplicar estilos a nuestros elementos, **lo mejor es asignar clases**. Esto no significa que los id no deban usarse, de hecho son bastante útiles para JavaScript ya que permiten acceder a elementos del DOM consumiendo pocos recursos.

En resumen, **reserva los ids para tu JavaScript**, y el resto nombrálo con clases. De esta forma no tendrás que acordarte si le asignaste un id o clase, y perderás menos tiempo.

## Nombres de las clases

Hay muchas formas y recomendaciones de nombrar las clases. Personalmente utilizo la [nomenclatura BEM](https://css-tricks.com/bem-101/), porque es muy autodescriptiva y está bastante estandarizada.

También es recomendable que las **clases de estado** (que son las que asignamos con JavaScript para manipular estilos en una determinada situación) tengan un nombre similar, por ejemplo: `is-hide`, `is-show`, `is-collapse`, etc.

## Evitar declarar estilos en línea

Cuando creamos código HTML tenemos que pensar en que solamente tiene que estar definida la estructura de la página, no los estilos.

```html
<span style="color: blue">Texto</span>
```

Este código HTML tiene declarado un estilo en línea, que no solo crea confusión a cualquier otra persona que lea el código, sino que además sobreescribe a cualquier estilo asignado por CSS. Lo recomendable es asignarle una clase y aplicarle estilos en el CSS.

Sin embargo, **hay ocasiones en las que sí es útil declarar estilos en línea**: cuando **los definimos vía JavaScript** (para crear efectos Parallax por ejemplo) o cuando estamos escribiendo un artículo en un CMS y queremos que un elemento tenga un estilo muy concreto.

## Resetea siempre los estilos

Los navegadores por defecto añaden márgenes y ciertos estilos a las etiquetas básicas de HTML. El problema está en que no todos los navegadores aplican los mismos estilos, lo que en ocasiones puede descuadrar nuestros diseños. La solución es resetear los estilos, y para ello los más conocidos son [Normalize](https://necolas.github.io/normalize.css/) o [Reset](https://meyerweb.com/eric/tools/css/reset/). ¿Cuál elegir? La diferencia entre estos dos es que el primero se encarga de **aplicar los estilos base para que sean los mismos para todos los navegadores** mientras que el segundo **elimina los márgenes de todos los elementos**. Personalmente suelo preferir el segundo pero con un pequeño añadido:

```css
*, body * { box-sizing: border-box }
```

El `box-sizing` es una propiedad que altera el comportamiento por defecto del navegador cuando se definen las dimensiones de un elemento. Un ejemplo rápido: si asignamos a un contenedor un `width` de `200px` y luego le agregamos un borde de `2px`, ese contenedor ocupará `204px`. ¿Extraño, verdad? Lo que hace `box-sizing: border-box` justamente es que por mucho borde que le agreguemos siga midiendo `200px`.

## Comentar el CSS

Los lenguajes de programación están pensados para que los entienda una máquina, no el humano. Tenemos que pensar en nuestro yo futuro o en otra persona que pueda leer nuestro código, por ese motivo siempre es bueno ir dejando comentarios.

```css
/* Esto es un comentario simple */
```

También es buena idea introducir las secciones con **comentarios en forma de bloque**:

```css
/*------------------------------------*\
    HEADER STYLES
\*------------------------------------*/
```

## El 0 no tiene unidad

Cada vez que un valor sea cero lo correcto es no indicar ninguna unidad. Es incorrecto usar `0px` o `0em`.

## Evitar el uso de !important

Tener un buen control de la cascada es esencial para crear código limpio y ordenado. Lo que hacemos con `!important` es alterar el funcionamiento natural de la cascada, un ejemplo:

```css
p {
    color: red !important;
}
. . .
p {
    color: blue;
}
```

En este código los párrafos deberían de tener el color azul, pero al haber declarado un `!important` se colorearían de rojo. Es ilógico y hace el código poco mantenible, así que tenemos que limitar su uso como última opción.

## Agrupar selectores

Si tenemos el siguiente código:

```css
h1 {
    font-size: 2.5em;
    font-weight: 800;
}
h2 {
    font-size: 2em;
    font-weight: 800;
}
```

Podemos sintetizarlo de forma que quede menos redundante:

```css
h1,
h2 {
    font-weight: 800;
}
h1 {
    font-size: 2.5em;
}
h2 {
   font-size: 2em;
}
```

De esta forma si un futuro queremos cambiar el grosor de la fuente solo tendremos que modificar un valor.

## Sigue una guía de estilo de CSS

CSS es un lenguaje poco restrictivo, y eso puede convertise en un problema a la hora de trabajar en equipo o seguir una buena estructura. Por eso lo mejor es seguir una guía de estilos que unifique y haga que todos los miembros escriban igual el código. Una de las más conocidas y con mejor reputación es la [guía de estilo que elaboró Airbnb](https://github.com/airbnb/css/blob/master/README.md). Por supuesto hay más, y siempre puedes crear la tuya propia si lo consideras oportuno. El objetivo final es que todo el código de la aplicación se vea uniforme.

## Usa preprocesadores como Sass

Hoy en día es imprescindible el uso de un preprocesador a la hora de trabajar con hojas de estilos. Uno de los más populares, y el que uso personalmente es [Sass](https://sass-lang.com/).

Los preprocesadores nos permiten **tener muchas hojas de estilos que luego se compilan en una sola**, por lo que no afecta al rendimiento. Esto nos evita tener que lidiar con una monstruosa hoja de estilos de miles de líneas y nos ahorra mucho tiempo. Por eso es importante seguir una buena estructura y también [una buena guía de estilo de SASS](https://sass-guidelin.es/es/). Esta es la **estructura** que suelo emplear en mis proyectos, extraída del enlace anterior:

```
Estructura del proyecto
└── scss
    ├── abstracts
        ├── _mixins.scss
        └── _var.scss           // Declaración de variables de SASS o CSS
    ├── base
        ├── _base.scss          // Estilos básicos que sobreescriben estilos de etiquetas HTML (sin clases)
        ├── _general.scss       // Estilos básicos aplicados a clases de CSS
        └── _typography.scss    // Estilos básicos de tipografía (familia, tamaños, grosor, etc.)
    ├── components     // Aquí irían los estilos de algún componente en concreto
    ├── layout         // Aquí irían los estilos de alguna sección que se repite en varias páginas
    ├── pages          // Aquí irían los estilos de las diferentes páginas que componen el proyecto
    ├── themes         // Aquí irían los estilos puramente estéticos (como colores)
    └── style.scss     // Fichero principal donde importamos el resto de archivos
```

## Probar el diseño en varios navegadores

Imprescindible probar el diseño al menos en **Firefox**, **Chrome** y **Edge**, y en dispositivos móviles como mínimo en **Chrome**. Si no temes por tu vida y quieres tener un soporte completo puedes probar con **Internet Explorer 11**, aunque a puertas de 2019 tampoco pasaría nada por no darle soporte.
