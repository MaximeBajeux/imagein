import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";

const RealisationsPage: React.FC<PageProps<Queries.LabListQuery>> = ({
  data,
}: PageProps<Queries.LabListQuery>) => {
  const cards = data.allMdx.nodes.map((node: any) => {
    const { frontmatter, imageRemote } = node;
    const imageData =
      imageRemote?.childImageSharp?.gatsbyImageData ||
      frontmatter.image?.childImageSharp?.gatsbyImageData;

    return (
      <Col xs={12} md={6} lg={4} xl={3} key={node.id} className="gap-2">
        <Link
          to={`/le-lab/${node.frontmatter?.slug}`}
          style={{ height: "100%" }}
        >
          <Card style={{ height: "100%" }}>
            <Card.Image data={imageData} alt={node.frontmatter?.imageAlt} />
            <Card.Title as="h3">{node.frontmatter?.title}</Card.Title>
            <Card.Content>{node.frontmatter?.description}</Card.Content>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Notre lab
        </h1>
      </Herobanner>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item>
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>Le lab</BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section className="layout__list">
        <Row className=" stretch">{cards}</Row>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query LabList {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/labs/" } } }
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

export default RealisationsPage;

export const Head: HeadFC = () => <SEO title="Le lab" />;
