const siteMetadata = {
  title: `sergiosanz.dev`,
  author: `Sergio Sanz`,
  description: `Diseño y desarrollo de aplicaciones web`,
}

const plugins = [
  `gatsby-transformer-remark`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-svg`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    }
  },
]

module.exports = {
  siteMetadata: siteMetadata,
  plugins: plugins,
}
