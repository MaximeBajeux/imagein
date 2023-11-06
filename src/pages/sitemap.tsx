import React from "react";
import { graphql } from "gatsby";
import { PageProps } from "gatsby";
import Layout from "../components/layout/layout";
import Herobanner from "../components/herobanner/herobanner";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import Row from "../components/row/row";
import Col from "../components/col/col";
import { Link } from "gatsby";

const SiteMapPage: React.FC<PageProps> = ({ data }) => {
  const pages = data.allSitePage.nodes;
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Plan du site
        </h1>
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
              href="/sitemap"
              title="Plan du site"
              position={2}
              disabled={true}
            >
              Plan du site
            </BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
      <section className="blogpost">
        <h2>Toutes les pages du site </h2>
        <p>
          {pages.map((page) => (
            <Link
              to={page.path}
              key={page.path}
              style={{ display: "block", width: "100%" }}
            >
              {page.path}
            </Link>
          ))}
        </p>
      </section>
    </Layout>
  );
};

export default SiteMapPage;

export const query = graphql`
  query SitemapQuery {
    allSitePage {
      nodes {
        path
      }
    }
  }
`;
