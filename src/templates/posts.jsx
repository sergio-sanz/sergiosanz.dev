import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TOC from '../components/TOC';

const posts = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;

  // Devuelve la fecha correctamente formateada en español
  const date = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const date = new Date(frontmatter.date);
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  const prev = pageContext.prev || null;
  const next = pageContext.next || null;

  return (
    <Layout page={ frontmatter }>
      <SEO title={ frontmatter.title } />
      <article className="article">
        <div className="article__head">
          { frontmatter.thumbnail && <Img className="article__thumbnail" fluid={ frontmatter.thumbnail.childImageSharp.fluid } /> }
          <h1 className="article__title">{ frontmatter.title }</h1>
          <div className="article__details">
            <time dateTime={ frontmatter.date }>{ date() }</time>
          </div>
        </div>
        <div className="article__body">
          <div className="article__content" dangerouslySetInnerHTML={{ __html: html }} />
          <aside className="article__secondary">
            <TOC />
          </aside>
        </div>
        <div className="article__footer">
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
        </div>
      </article>
    </Layout>
  )
}

export default posts;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1020) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
