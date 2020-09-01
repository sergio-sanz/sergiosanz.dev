const siteMetadata = {
  title: `sergiosanz.dev`,
  author: `Sergio Sanz`,
  description: `Diseño y desarrollo de aplicaciones web`,
  siteUrl: `https://sergiosanz.dev`,
}

const plugins = [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 700,
            linkImagesToOriginal: false,
          }
        },
        {
          resolve: `gatsby-remark-images-medium-zoom`,
          options: {}
        },
        `gatsby-remark-prismjs`,
      ],
    }
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-svg`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sitemap`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  }
]

module.exports = {
  siteMetadata: siteMetadata,
  plugins: plugins,
}
