import React from "react";
import { graphql, PageProps, Queries } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const BlogPost = ({
  data,
  children,
}: {
  data: PageProps<Queries.BlogPostQuery>;
  children: React.ReactNode;
}) => {
  const { mdx } = data;
  const { frontmatter } = mdx;

  return (
    <Layout>
      <article className="blogpost">
        <h1>{frontmatter.title}</h1>
        <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        {children}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MM YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        imageAlt
      }
      imageRemote {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;

export default BlogPost;

export const Head = () => <SEO title="Blog" article />;
