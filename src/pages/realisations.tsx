import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps, graphql, Link } from "gatsby";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Button from "../components/button/button";
import Stack from "../components/stack/stack";

const RealisationsPage: React.FC<PageProps<Queries.RealisationListQuery>> = ({
  data,
}: PageProps<Queries.RealisationListQuery>) => {
  const cards = data.allMdx.nodes.map((node: any) => {
    const { frontmatter, imageRemote } = node;
    const imageData =
      imageRemote?.childImageSharp?.gatsbyImageData ||
      frontmatter.image?.childImageSharp?.gatsbyImageData;

    return (
      <Col xs={12} md={6} lg={4} xl={3} key={node.id} className="gap-2">
        <Link
          to={`/realisations/${node.frontmatter?.slug}`}
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
        <h1 className="herobanner__title" style={{ marginTop: "4rem" }}>
          Nos réalisations
        </h1>
        <p>
          Nous avons la chance de travailler avec des clients qui nous font
          confiance, et c'est ici que l'on vous en parle !
        </p>
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
              Accueil
            </BreadCrumb.Item>
            <BreadCrumb.Item
              href="/realisations"
              title="Nos réalisations"
              position={2}
              disabled={true}
            >
              Nos réalisations
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section className="layout__list">
        <Row className=" stretch">
          <Col xs={12}>
            <p className="mtb-2">
              Chez Image IN, nous ne faisons pas que des sites internet à la
              chaîne selon notre standard. Il nous arrive de travailler sur des
              projets plus originaux, plus complexes, ou plus spécifiques. Pas
              que des projets de développement d'ailleurs, mais aussi de la
              création graphique, de la rédaction, de la traduction, etc, et
              c'est ici que nous vous en parlons !
            </p>
          </Col>
        </Row>
        <Row className=" stretch">{cards}</Row>
        <Row className=" stretch">
          <Col xs={12}>
            <p className="mtb-2">
              Si vous aussi vous avew un projet original à nous proposer,
              n'hésitez pas à nous contacter !
            </p>
          </Col>
          <Col xs={12}>
            <Stack direction="horizontal" position="center" className="mb-3">
              <Button as="Link" to="/contact" className="reverse">
                Prendre rendez-vous
              </Button>
              <Button as="Link" to="/offres">
                Découvrir nos services
              </Button>
            </Stack>
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query RealisationList {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/realisations/" } } }
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
    title="Image IN - Nos réalisations mémorables"
    description="Suivez nos projets et découvrez ici nos réalisations les plus originales !"
    pathname="/realisations/"
  />
);
