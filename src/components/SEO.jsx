import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../assets/favicon.ico';

const SEO = ({ title, description }) => {
  // Recupera la información del sitio (gatsby-config.js)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      title={ title || 'Diseño web' }
      titleTemplate={ `%s – ${site.siteMetadata.author}` }
    >
      <html lang="es" />
      <link rel="icon" href={ favicon } />
      <meta name="description" value={ description || site.siteMetadata.description } />
    </Helmet>
  );
}

export default SEO;
