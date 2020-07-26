import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const posts = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  // Devuelve la fecha correctamente formateada en español
  const date = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const date = new Date(frontmatter.date);
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

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
