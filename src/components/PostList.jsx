import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Details from './Details';

const PostList = ({ posts }) => {
  // Determina si un artículo es nuevo o no
  const isRecent = date => {
    const dateObj = new Date(date);
    const now = new Date();
    // Calcula el número de días que han pasado desde que se publicó el artículo
    const diff = (now - dateObj) / 86400000; // 1 día = 86400000 milisegundos
    // Devuelve true si el artículo tiene menos de 7 días de antigüedad
    return diff <= 7;
  }

  return (
    <>
      { posts.map(post => (
        <article key={ post.node.id } className="post">
          <Link to={ post.node.fields.slug } className="post__wrapper">
            <div className="post__thumbnail">
              { post.node.frontmatter.thumbnail &&
                <Img fluid={ post.node.frontmatter.thumbnail.childImageSharp.fluid } />
              }
              { isRecent(post.node.frontmatter.date) &&
                <span className="post__label">Nuevo</span>
              }
            </div>
            <div className="post__meta">
              <h2 className="post__title">{ post.node.frontmatter.title }</h2>
              <div className="post__details">
                <Details date={ post.node.frontmatter.date } timeToRead={ post.node.timeToRead } />
              </div>
              <p className="post__excerpt">{ post.node.excerpt }</p>
            </div>
          </Link>
        </article>
      )) }
    </>
  );
}

export default PostList;
