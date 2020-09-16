---
title: 'Pulse estilo Material Design'
date: '2018-12-22'
thumbnail: '../../images/pulse.jpg'
---

La semana pasada hablé sobre [cómo conseguir la animación de las tabs](/blog/material-design-tabs/) característico de [Material Design](https://material.io/), y hoy volvemos con otra de sus animaciones más interesantes, el **efecto _pulse_**.

## La estructura HTML

Antes de nada, voy a usar la [fuente Material Icons](https://material.io/resources/icons/) oficial de **Google**. Para usarla simplemente hay que importarla como si de una tipografía de **Google Fonts** se tratase, añadiendo al `<head>` la siguiente etiqueta:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

La estructura de la animación como tal es la siguiente:

```html
<a href="#" class="pulse"><i class="material-icons">notifications</i></a>
```

La estructura es simple a más no poder: un enlace o botón con la clase `pulse` y dentro un icono (aunque puede ser cualquier cosa).

## Añadiendo estilos

Con ese HTML tan simple estamos listos para añadir estilos:

```css
.pulse {
    position: relative;
}

.pulse-effect {
    animation: pulse 1s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
}

@keyframes pulse {
    from { opacity: 1; transform: scale(0.5) }
    to   { opacity: 0; transform: scale(1.5) }
}
```

El CSS tampoco tiene mucho misterio. En primer lugar, la clase `pulse` recibe `position: relative` para posicionar el efecto _pulse_ en relación al contenedor principal. La clave realmente está en la clase `pulse-effect`, que será la que utilicemos vía JavaScript para mostrar la animación y que tendrá las siguientes propiedades:

* La animación `pulse` a la que le indicaremos cuanto queremos que dure la animación y una curva personalizada para que se parezca más a Material Design.
* Un color de fondo semitransparente que tendrá el efecto.
* Un ancho y alto de 100% por defecto y `border-radius: 50%` para que sea completamente circular.
* Un `position: absolute` para referenciarlo respecto a su padre `pulse` y posicionarlo con `left: 0` y `bottom: 0`.
* Una opacidad del cero por ciento para que por defecto sea invisible (sino se le indica esta propiedad realizará un molesto parpadeo cada vez que termine la animación).

Por último, se declaran los fotogramas clave de la animación del `pulse`.

## La animación con JavaScript

**JavaScript** será el encargado de añadir el `div` con la clase `pulse-effect` a través del siguiente código:

```js
document.querySelectorAll('.pulse').forEach(pulse => {
  pulse.addEventListener('click', e => {
    let divPulseEffect = document.createElement('div');
    divPulseEffect.className = 'pulse-effect';
    pulse.appendChild(divPulseEffect);

    window.setTimeout(() => {
      pulse.removeChild(divPulseEffect);
    }, 2000);
  });
});
```

El funcionamiento aquí también es muy simple y se podría resumir en que al hacer clic se crea un `div` hijo con la clase `pulse-effect`. Para ello se escuchan todos los clics de todos los elementos con la clase `pulse`. Luego crea un elemento `div`, le asigna la clase `pulse-effect` y lo añade como hijo del elemento con la clase `pulse`. Esto hará que se reproduzca la animación `pulse` que escribimos en el CSS. Una vez finalice la animación ya no necesitaremos el `div`, así que eliminamos el hijo después de un tiempo prudencial para dar tiempo a que se complete la animación (por ejemplo, 2 segundos).

## El resultado

<iframe height="265" style="width: 100%;" scrolling="no" title="Pulse like Material Design" src="https://codepen.io/sergios98/embed/GYMpvj?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sergios98/pen/GYMpvj'>Pulse like Material Design</a> by Sergio Sanz
  (<a href='https://codepen.io/sergios98'>@sergios98</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
