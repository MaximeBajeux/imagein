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
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className="blogpost">{children}</div>
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
        image
        imageAlt
      }
    }
  }
`;

export default BlogPost;

export const Head = () => <SEO title="Blog" article />;
