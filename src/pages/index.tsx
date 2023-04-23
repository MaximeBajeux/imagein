import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import HeroBanner from "../components/herobanner/herobanner";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner />
    </Layout>
  );
};

export const Head = () => <SEO title="Home" />;

export default IndexPage;
