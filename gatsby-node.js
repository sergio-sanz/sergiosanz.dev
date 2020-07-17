const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (results.errors) throw new Error(results.errors);

  const posts = results.data.allMarkdownRemark.edges;
  const postTemplate = path.resolve('./src/templates/posts.jsx');

  posts.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        frontmatter: post.node.frontmatter,
        html: post.node.html,
      }
    })
  });
}
