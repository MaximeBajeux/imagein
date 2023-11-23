import React from "react";
import Row from "../row/row";
import Col from "../col/col";
import Card from "../card/card";
import { Link, graphql, StaticQuery } from "gatsby";

const LastArticles = ({ data }) => {
  const { allMdx } = data;
  const cards = data.allMdx.nodes.map((node: any) => {
    const { frontmatter, imageRemote } = node;
    const imageData =
      imageRemote?.childImageSharp?.gatsbyImageData ||
      frontmatter.image?.childImageSharp?.gatsbyImageData;

    return (
      <Col xs={12} md={6} lg={4} xl={3} key={node.id} className="gap-2">
        <Link to={`/blog/${node.frontmatter?.slug}`} style={{ height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <Card.Image data={imageData} alt={node.frontmatter?.imageAlt} />
            <Card.Title as="h2">{node.frontmatter?.label}</Card.Title>
            <Card.Content>{node.frontmatter?.description}</Card.Content>
          </Card>
        </Link>
      </Col>
    );
  });

  return <>{cards}</>;
};

export default () => (
  <StaticQuery
    query={graphql`
      query LastArticles {
        allMdx(
          filter: {
            frontmatter: { type: { regex: "/article/" } }
            internal: { contentFilePath: { regex: "/posts/" } }
          }
          sort: { frontmatter: { date: DESC } }
          limit: 3
        ) {
          nodes {
            id
            frontmatter {
              title
              label
              slug
              date
              description
              categories
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
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
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          totalCount
        }
      }
    `}
    render={(data) => <LastArticles data={data} />}
  />
);
