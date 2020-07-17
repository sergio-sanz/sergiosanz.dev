import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default ({ pageContext: { frontmatter, html } }) => {
  const date = () => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const date = new Date(frontmatter.date);
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return (
    <Layout>
      <SEO title={ frontmatter.title } />
      <article className="article">
        <div className="article__head">
          <h1>{ frontmatter.title }</h1>
          <div className="article__details">
            <time datetime={ frontmatter.date }>{ date() }</time>
          </div>
        </div>
        <div className="article__body">
          <div className="article__content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </Layout>
  )
}
