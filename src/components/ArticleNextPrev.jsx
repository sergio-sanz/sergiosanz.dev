import React from 'react';
import { Link } from 'gatsby';

const ArticleNextPrev = ({ next, prev }) => {
  // Si no hay artículo anterior ni posterior no renderiza nada
  if (!next && !prev) {
    return null;
  }

  return (
    <div className="article__more">
      { prev &&
        <Link to={ prev.fields.slug } className="more__prev">
          <div className="more__wrapper">
          <i className="icon icon--arrow-left"></i>
            <div className="more__text">
              <span>Anterior</span>
              <h2>{ prev.frontmatter.title }</h2>
            </div>
          </div>
        </Link>
      }
      { next &&
        <Link to={ next.fields.slug } className="more__next">
          <div className="more__wrapper">
            <div className="more__text">
              <span>Siguiente</span>
              <h2>{ next.frontmatter.title }</h2>
            </div>
            <i className="icon icon--arrow-right"></i>
          </div>
        </Link>
      }
    </div>
  );
}

export default ArticleNextPrev;
