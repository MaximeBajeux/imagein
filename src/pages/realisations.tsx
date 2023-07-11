import { PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Herobanner from "../components/herobanner/herobanner";
import Row from "../components/row/row";
import Col from "../components/col/col";
import BreadCrumb from "../components/breadcrumb/breadcrumb";
import { Link } from "gatsby";

const Realisation: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Nos réalisations
        </h1>
      </Herobanner>
      <Row>
        <Col xs={12}>
          <BreadCrumb>
            <BreadCrumb.Item>
              <Link to="/">Accueil</Link>
            </BreadCrumb.Item>
            <BreadCrumb.Item>Nos réalisations</BreadCrumb.Item>
          </BreadCrumb>
        </Col>
      </Row>
    </Layout>
  );
};

export default Realisation;

const Head = () => {
  return <SEO title="Nos réalisations" />;
};
