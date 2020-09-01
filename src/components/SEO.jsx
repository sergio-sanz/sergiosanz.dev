import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../hooks/useSiteMetadata';
import favicon from '../assets/favicon.ico';

const SEO = ({ title, description, image, location }) => {
  const site = useSiteMetadata();

  return (
    <Helmet
      title={ title || 'Diseño web' }
      titleTemplate={ `%s – ${site.author}` }
    >
      <html lang="es" />
      <link rel="icon" href={ favicon } />
      { location &&
        <link rel="canonical" href={ site.siteUrl + location.pathname + (location.pathname.endsWith('/') ? '' : '/') } />
      }
      <meta name="description" content={ description || site.description } />
      <meta property="og:title" content={ (title || 'Diseño web') + ` – ${site.author}` } />
      <meta property="og:description" content={ description || site.description } />
      { image &&
        <meta property="og:image" content={ site.siteUrl + image } />
      }
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={ description || site.description } />
      { image &&
        <meta name="twitter:image" content={ site.siteUrl + image } />
      }
    </Helmet>
  );
}

export default SEO;
