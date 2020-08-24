import React, { useState, useEffect } from 'react';

// Calcula que encabezado está activo
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
}

const TOC = ({ headings }) => {
  // Establece que encabezado está actualmente activo en pantalla
  const [headingActive, setHeadingActive] = useState();

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
      { headings.titles.length > 0 &&
        <div className="toc">
          <span className="toc__title">Contenidos</span>
          <nav className="toc__nav">
            { headingActive >= 0 &&
              <div className="toc__highlighter" style={{ bottom: `${((headings.titles.length - 1) * 48) - headingActive * 48}px` }}></div>
            }
            { headings.titles.map(({ title }, index) => (
              <button key={ title } className={ 'toc__link' + (headingActive === index ? ' toc__link--active' : '') } onClick={e => {
                e.preventDefault();
                headings.nodes[index].scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}>
                { title }
              </button>
            )) }
          </nav>
        </div>
      }
    </>
  );
}

export default TOC;
