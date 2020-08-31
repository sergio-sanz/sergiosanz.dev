import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  // Recupera la información del sitio (gatsby-config.js)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteURL
          }
        }
      }
    `
  );

  return site.siteMetadata;
}

export default useSiteMetadata;
