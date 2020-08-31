import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/Article';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const posts = ({ data, pageContext, location }) => {
  const { frontmatter, html, timeToRead, excerpt } = data.markdownRemark;

  return (
    <Layout page={ frontmatter }>
      <SEO
        title={ frontmatter.title }
        description={ excerpt }
        image={ frontmatter.thumbnail.childImageSharp.fluid.src }
        location={ location }
      />
      <div className="wrapper">
        <Article
          frontmatter={ frontmatter }
          html={ html }
          timeToRead={ timeToRead }
          pageContext={ pageContext }
        />
      </div>
    </Layout>
  );
}

export default posts;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt(pruneLength: 160)
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
