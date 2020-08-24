---
title: 'Ripple estilo Material Design'
date: '2018-12-29'
thumbnail: '../../images/ripple.png'
---

Para cerrar con esta serie de artículos sobre [Material Design](https://material.io/), hoy crearemos usando únicamente JavaScript puro el **efecto _ripple_**, también llamado **waves**, por ser similar a una ola que se extiende por el agua.

Para crear este efecto recomiendo antes haber leído [mi anterior artículo](/blog/material-design-pulse), ya que la técnica es la misma.

## La estructura HTML

```html
<button class="ripple">Botón</button>
```

La estructura es tan simple como asignarle a un elemento cualquiera la clase `ripple`.

## Añadiendo estilos

```css
.ripple {
    position: relative;
    overflow: hidden;
}

.ripple-effect {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    background: rgba(255, 255, 255, 0.4);
    animation: ripple-animation 2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@keyframes ripple-animation {
    from { opacity: 1; transform: scale(0) }
    to { opacity: 0; transform: scale(1) }
}
```

El CSS es también muy similar al **efecto _pulse_**. En primer lugar se posiciona relativamente la clase `ripple` y la propiedad `overflow: hidden` para que la onda no salga del contenedor. La onda será el `ripple-effect`, que se creará vía JavaScript.

## La animación con JavaScript

Con **JavaScript** se posiciona la onda para que se genere en la posición en la que el usuario haga clic y le asigna la clase `ripple-effect` para que realice la animación:

```js
document.querySelectorAll('.ripple').forEach(ripple => {
  ripple.addEventListener('mousedown', e => {

    let posX = e.pageX - ripple.getBoundingClientRect().left;
    let posY = e.pageY - ripple.getBoundingClientRect().top;
    let buttonWidth = 1.5 * ripple.offsetWidth;

    let divRippleEffect = document.createElement('div');
    divRippleEffect.className = 'ripple-effect';
    divRippleEffect.style.width = `${buttonWidth}px`;
    divRippleEffect.style.height = `${buttonWidth}px`;
    divRippleEffect.style.left = `${ posX - (buttonWidth / 2) }px`;
    divRippleEffect.style.top = `${ posY - (buttonWidth / 2) }px`;

    ripple.appendChild(divRippleEffect);

    window.setTimeout(() => {
      ripple.removeChild(divRippleEffect);
    }, 2000);
  });
});
```

Una vez más, el funcionamiento vuelve a ser muy similar al del **efecto _pulse_**, crear un `div` con la clase `ripple-effect` que será la onda. Sin embargo, hay una **dificultad extra**: conseguir que la onda empiece en la posición del ratón.

En la web, las coordenadas en las que se genera un evento se guardan con las propiedades `pageX` y `pageY` para el eje horizontal y vertical respectivamente. Estas propiedades indican la distancia en píxeles respecto al lado izquierdo y superior del **viewport**. Con el método `getBoundingClientRect` podemos averiguar la posición del elemento en la página.

Aquí es donde entra en juego la propiedad `position: absolute` del contenedor con la clase `ripple`. El problema es que **necesitamos las coordenadas internas del contenedor**, y no las de la página. Conociendo la teoría podemos deducir que las coordenadas internas serán la resta de las coordenadas en el viewport menos la posición del contenedor en la página `(posX = e.pageX - ripple.getBoundingClientRect().left)`.

Por último, se elimina el `div` cuando pasa un tiempo prudencial para que de tiempo a completarse la animación.

## El resultado

<iframe height="265" style="width: 100%;" scrolling="no" title="Ripple Effect like Google Material Design" src="https://codepen.io/sergios98/embed/BqdXeE?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sergios98/pen/BqdXeE'>Ripple Effect like Google Material Design</a> by Sergio Sanz
  (<a href='https://codepen.io/sergios98'>@sergios98</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
