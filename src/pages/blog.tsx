import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const BlogPage = ({
  data,
}: PageProps<{
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        title: string;
        date: string;
        description: string;
        image: string;
        imageAlt: string;
      };
    }[];
  };
}>) => {
  const { nodes } = data.allMdx;

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MM YYYY")
          description
          image
          imageAlt
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <SEO title="Blog" />;
