import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Error404 from '../assets/error404.svg';

const notFound = () => {
  return (
    <Layout>
      <SEO title="Página no encontrada" />
      <div className="wrapper wrapper--center">
        <section className="error-page">
          <div className="error-page__wrapper">
            <Error404 />
            <h1>Página no encontrada</h1>
            <p>La página solicitada no existe o dejó de estar disponible.</p>
            <Link to="/" className="button">Volver al principio</Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default notFound;
