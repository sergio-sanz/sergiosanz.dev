import React, { useState, useEffect } from 'react';

// Calcula que encabezado está activo
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
}

const TOC = () => {
  // Guarda todos los encabezados 'h2' de la página
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
  });

  // Establece que encabezado está actualmente activo en pantalla
  const [headingActive, setHeadingActive] = useState();

  // Recupera todos los encabezados de la página y los almacena en el estado
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.article__content h2'));
    const titles = nodes.map(node => ({
      title: node.innerText,
    }));
    setHeadings({ titles, nodes });
  }, [setHeadings]);

  // Añade un 'scroll listener'
  useEffect(() => {
    const scrollListener = () => {
      const { titles, nodes } = headings;

      const offsets = nodes.map(el => accumulateOffsetTop(el));
      const activeIndex = offsets.findIndex(
        offset => offset > window.scrollY + 0.8 * window.innerHeight
      );
      setHeadingActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
    }

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    }
  }, [headings]);

  return (
    <>
      { headings.titles.length > 0 && <div className="toc">
        <span className="toc__title">Contenidos</span>
        <nav className="toc__nav">
          { headingActive >= 0 && <div className="toc__highlighter" style={{ bottom: `${((headings.titles.length - 1) * 48) - headingActive * 48}px` }}></div> }
          {headings.titles.map(({ title }, index) => (
            <a href="#" className={ headingActive === index ? 'active' : '' } onClick={e => {
              e.preventDefault();
              headings.nodes[index].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}>
              { title }
            </a>
          ))}
        </nav>
      </div> }
    </>
  );
}

export default TOC;