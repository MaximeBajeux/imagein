import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
};

export const Head = () => <SEO title="About" />;

export default AboutPage;
