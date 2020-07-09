import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default ({ pageContext: { frontmatter, html } }) => {
  return (
    <Layout>
      <SEO />
      <h1>{ frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
