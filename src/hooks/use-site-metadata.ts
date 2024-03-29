import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
        featuredImage: file(relativePath: { eq: "image-in.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    `
  );
  return { ...site.siteMetadata, featuredImage };
};
