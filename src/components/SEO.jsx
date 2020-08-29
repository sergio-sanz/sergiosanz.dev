import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../assets/favicon.ico';

const SEO = ({ title, description, image }) => {
  // Recupera la información del sitio (gatsby-config.js)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            siteURL
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
      <meta property="og:title" content={ (title || 'Diseño web') + ` – ${site.siteMetadata.author}` } />
      <meta property="og:description" content={ description || site.siteMetadata.description } />
      { image &&
        <meta property="og:image" content={ site.siteMetadata.siteURL + image } />
      }
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={ description || site.siteMetadata.description } />
      { image &&
        <meta name="twitter:image" content={ site.siteMetadata.siteURL + image } />
      }
    </Helmet>
  );
}

export default SEO;
