import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
    </Layout>
  );
};

export const Head = () => <SEO title="Home" />;

export default IndexPage;
