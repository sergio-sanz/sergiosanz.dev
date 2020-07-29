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
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (results.errors) throw new Error(results.errors);

  const posts = results.data.allMarkdownRemark.edges;
  const postTemplate = path.resolve('./src/templates/posts.jsx');

  posts.forEach(({ node }, index) => {
    const isBlog = node.fields.slug.match(/(blog)/);

    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
        prev: isBlog ? prevArticle(posts, index) : null,
        next: isBlog ? nextArticle(posts, index) : null,
      },
    })
  });
}

/**
 * Función recursiva que busca el anterior artículo publicado en el blog
 */
const prevArticle = (posts, index) => {
  // Si ya no hay más artículos devuelve nulo
  if (!posts[index - 1]) return null;
  // Comprueba si el artículo anterior está publicado en el blog
  if (posts[index - 1].node.fields.slug.match(/(blog)/)) {
    return posts[index - 1].node;
  } else {
    return prevArticle(posts, index - 1);
  }
}

/**
 * Función recursiva que busca el siguiente artículo publicado en el blog
 */
const nextArticle = (posts, index) => {
  // Si ya no hay más artículos devuelve nulo
  if (!posts[index + 1]) return null;
  // Comprueba si el artículo siguiente está publicado en el blog
  if (posts[index + 1].node.fields.slug.match(/(blog)/)) {
    return posts[index + 1].node;
  } else {
    return nextArticle(posts, index + 1);
  }
}
