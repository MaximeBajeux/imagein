import { PageProps } from "gatsby";
import React from "react";
import SEO from "../components/seo/seo";
import Layout from "../components/layout/layout";
import Herobanner from "../components/herobanner/herobanner";

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ marginTop: "6rem" }}>
          Nous contacter
        </h1>
      </Herobanner>
    </Layout>
  );
};

export default Contact;

const Head = () => {
  return <SEO title="Nous contacter" />;
};
