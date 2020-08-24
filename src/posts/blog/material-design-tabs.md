---
title: 'Tabs estilo Material Design'
date: '2018-12-15'
thumbnail: '../../images/material-tabs.png'
---

Las guías de estilo que **Google** estrenó en 2014 bajo el nombre de [Material Design](https://material.io/) han sido muy aplaudidas por su simplicidad. Parte del éxito recae sobre las fluidas animaciones de las que hace gala sus aplicaciones.

En esta entrada quiero compartir una ligera recreación que hice usando JavaScript puro.

## La estructura HTML

El HTML es prácticamente igual al de un sistema de _tabs_ normal:

```html
<nav class="tabs">
    <ul class="tabs-list" id="tabs">
        <li class="tab-item">Tab 1</li>
        <li class="tab-item">Tab 2</li>
        <li class="tab-item">Tab 3</li>
        <li class="tab-item">Tab 4</li>
        <li class="tab-item">Tab 5</li>
    </ul>
    <div class="highlighter" id="highlighter"></div>
</nav>
```

Por un lado está el contenedor principal `nav` que envuelve el componente:

* La lista `ul` con todos los ítems del menú.
* Un `div` con la clase `highlighter` al que se le aplicarán estilos para convertirlo en la barra inferior que se mueve por los diferentes ítems según vayan siendo seleccionados.

## Añadiendo estilos

A través de los estilos se le dará la apariencia tipo Material Design:

```css
:root {
    --num-tabs: 0; /* Lo modificaremos con JS */
}

.tabs {
    position: relative;
    width: 640px; /* También puede ser un porcentaje como 100% */
}

.tabs-list {
    display: inline-block;
    width: 100%;
}

.tab-item {
    align-items: center;
    cursor: pointer;
    display: flex;
    float: left;
    height: 60px;
    justify-content: center;
    transition: background-color 0.2s ease;
    width: calc(100% / var(--num-tabs));
}

.tab-item:hover {
    background-color: rgba(238, 110, 115, 0.2);
}

.highlighter {
    background-color: #EE6E73;
    bottom: 0;
    height: 4px;
    position: absolute;
    transition: transform 0.2s ease-out;
    width: calc(100% / var(--num-tabs));
}
```

Para calcular el ancho de cada ítem se utiliza la variable CSS que será editada vía JavaScript con el número de _tabs_. La magia de la animación reside completamente en el _highlighter_, que se moverá entre pestañas gracias a la propiedad `transform: translateX()`. Este valor también vendrá definido en el código JavaScript.

## La animación con JavaScript

Ya solo faltaría animar el `div` con la clase `highlighter` utilizando la propiedad `transform`.

> Ya que el elemento está posicionado respecto a las coordenadas del padre también podría usarse `left`. Sin embargo, `transform` no modifica la geometría de la página, lo que se traduce en animaciones más fluidas. En [esta página](https://csstriggers.com/) puedes ver las operaciones que hace cada motor para renderizar una propiedad.

```js
const tabs = Array.prototype.slice.apply(document.querySelectorAll('.tab-item'));
const tabContainer = document.getElementById('tabs');
const tabHighlighter = document.getElementById('highlighter');
const tabsWidth = tabContainer.offsetWidth;

document.documentElement.style.setProperty('--num-tabs', tabs.length);

tabContainer.addEventListener('click', e => {
  if (e.target.classList.contains('tab-item')) {
      let item = tabs.indexOf(e.target);
      tabs.map(tab => tab.classList.remove('active'));
      tabs[item].classList.add('active');

      tabHighlighter.style.transform = `translateX(${(tabsWidth / tabs.length) * item }px)`;
  }
});
```

El código es realmente sencillo, ya que su única función es calcular en que posición deberá encontrarse el _highlighter_. En primer lugar, se definen las variables que intervendrán en el cálculo:

* Un array con todos los ítems, que además modificará el valor de la variable CSS `--num-tabs` (definida en los estilos).
* El contenedor `nav` que engloba todas las _tabs_ y se usará para escuchar los clics.
* El ancho en píxeles de todo el contenedor `nav`.
* Y el elemento estrella de la función: el `highligter`.

Dado que tenemos escuchar los clics de cada uno de los ítems, una opción inteligente sería escuchar el clic del elemento padre (`nav`), y detectar el índice del ítem accionado. Ese dato lo podemos encontrar en el `e.target` del evento.

Ya solo faltaría calcular cuántos píxeles hay que mover el _highligter_. Para ello simplemente se multiplica el índice del ítem por el tamaño de cada _tab_, que no será más que el ancho total del contenedor dividido por el número de ítems (`tabsWidth / tabs.length`).

## El resultado

<iframe height="265" style="width: 100%;" scrolling="no" title="Tabs like Google Material Design" src="https://codepen.io/sergios98/embed/LgzPGm?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sergios98/pen/LgzPGm'>Tabs like Google Material Design</a> by Sergio Sanz
  (<a href='https://codepen.io/sergios98'>@sergios98</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
