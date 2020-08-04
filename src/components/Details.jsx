import React from 'react';

const Details = ({ date, timeToRead }) => {
  // Devuelve la fecha correctamente formateada en español
  const getDate = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const dateObj = new Date(date);
      return `${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
  }

  return (
    <ul className="details">
      { date && <li><time dateTime={ date }>{ getDate() }</time></li> }
      <li><span>{ timeToRead } minuto{ timeToRead > 1 && 's' }</span></li>
    </ul>
  );
}

export default Details;
