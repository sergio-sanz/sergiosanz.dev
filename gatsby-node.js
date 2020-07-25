const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Añade el field 'slug'
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

// Crea las rutas de las páginas generadas con los archivos Markdown del directorio 'posts'
// y les asigna el componente con la template
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
      context: { slug: post.node.fields.slug },
    })
  });
}
