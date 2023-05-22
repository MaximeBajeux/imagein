"use client";
import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage: React.FC<PageProps<Queries.BlogListQuery>> = ({
  data,
}: PageProps<Queries.BlogListQuery>) => {
  const cards = data.allMdx.nodes.map((node: any) => {
    const { frontmatter, imageRemote } = node;
    const imageData =
      getImage(imageRemote?.childImageSharp?.gatsbyImageData) ||
      getImage(frontmatter.image?.childImageSharp?.gatsbyImageData);

    return (
      <Col xs={12} md={6} lg={4} xl={3} key={node.id} className="gap-2">
        <Link to={`/blog/${node.frontmatter?.slug}`} style={{ height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <Card.Image>
              <GatsbyImage image={imageData} alt={node.frontmatter?.imageAlt} />
            </Card.Image>
            <Card.Title as="h3">{node.frontmatter?.title}</Card.Title>
            <Card.Content>{node.frontmatter?.description}</Card.Content>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Layout>
      <section className="layout__list">
        <Row className=" stretch">{cards}</Row>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogList {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/posts/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 300
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
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <SEO title="Blog" />;
