import React, { useEffect, useRef, useState } from 'react';
import Img from 'gatsby-image';

import ArticleNextPrev from './ArticleNextPrev';
import Details from './Details';
import TOC from './TOC';
import useOutsideClick from '../hooks/useOutsideClick';

const Article = ({ frontmatter, html, timeToRead, pageContext }) => {
  const ref = useRef();
  const [TOCActive, setTOCActive] = useState(false);

  useOutsideClick(ref, () => {
    if (TOCActive) {
      setTOCActive(false);
    }
  });

  // Guarda todos los encabezados 'h2' de la página
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
  });

  // Recupera todos los encabezados de la página y los almacena en el estado
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.article__content h2'));
    const titles = nodes.map(node => ({
      title: node.innerText,
    }));
    setHeadings({ titles, nodes });
  }, [setHeadings]);

  const prev = pageContext.prev || null;
  const next = pageContext.next || null;

  return (
    <article className="article">
      <div className="article__head">
        { frontmatter.thumbnail &&
          <Img className="article__thumbnail" fluid={ frontmatter.thumbnail.childImageSharp.fluid } />
        }
        <h1 className="article__title">{ frontmatter.title }</h1>
        { frontmatter.date &&
          <div className="article__details">
            <Details date={ frontmatter.date } timeToRead={ timeToRead } />
          </div>
        }
      </div>
      <div className="article__body">
        <div className="article__content" dangerouslySetInnerHTML={{ __html: html }} />
        <aside className={ 'article__secondary' + (TOCActive ? ' article__secondary--active' : '') } ref={ ref }>
          <TOC headings={ headings } />
        </aside>
      </div>
      { (next || prev) &&
        <div className="article__footer">
          <ArticleNextPrev next={ next } prev={ prev } />
        </div>
      }
      { headings.titles.length > 0 &&
        <button
          className={ 'toc-toggle' + (TOCActive ? ' toc-toggle--active' : '') }
          role="switch"
          aria-checked={ TOCActive }
          aria-label="Contenidos"
          onClick={ () => setTOCActive(!TOCActive) }>
        </button>
      }
    </article>
  );
}

export default Article;
