import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SEO from '../components/SEO';

import thumbnail from '../assets/default.png';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Inicio" image={ thumbnail } />
      <section className="home">
        <div className="wrapper">
          <h1>¡Hola! Me llamo <span className="text--highlighted">Sergio Sanz</span> y soy desarrollador web.</h1>
        </div>
      </section>
      <div className="wrapper">
        <section className="posts">
          <div className="posts__head">
            <h1>Últimos artículos</h1>
            <Link to="/blog">Ver todo</Link>
          </div>
          <PostList title="Blog" posts={ posts } />
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { fileAbsolutePath: { regex: "/(blog)/" } }, limit: 6) {
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
