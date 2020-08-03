import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SEO from '../components/SEO';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <PostList title="Blog" posts={ posts } />
    </Layout>
  );
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 240)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 690) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
