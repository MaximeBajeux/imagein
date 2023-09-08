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
            <Card.Title as="h2">{node.frontmatter?.label}</Card.Title>
            <Card.Content>{node.frontmatter?.description}</Card.Content>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "3rem" }}>
          Notre lab
        </h1>
        <Row>
          <Col xs={12}>
            <p className="mb-1">
              Ici nous vous présentons nos projets personnels, nos
              expérimentations et nos idées. Un peu de tout, un peu de rien,
              mais surtout beaucoup de fun !
            </p>
            <p>
              Les technologies utilisées ici ne sont pas forcément matures pour
              une utilisation en production, ou adaptées à une solution axée sur
              la performance. Mais elles sont toutes intéressantes à découvrir !
            </p>
          </Col>
        </Row>
      </Herobanner>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item
              href="/"
              title="Accueil"
              position={1}
              disabled={false}
            >
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/le-lab/"
              title="Le lab"
              position={2}
              disabled={true}
            >
              Le lab
            </BreadCrumb.Item>
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
          label
          h1
          slug
          date
          description
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
    }
  }
`;

export default RealisationsPage;

export const Head: HeadFC = () => (
  <SEO
    title="Le lab d'Image IN !"
    description="Ici vous entrez dans notre zone d'expérimentation"
    pathname="/le-lab/"
  />
);
