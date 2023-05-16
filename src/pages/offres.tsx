import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import { HeadFC, PageProps, graphql, Link } from "gatsby";

import Grid from "../components/grid/grid";
import Row from "../components/row/row";
import Col from "../components/col/col";
import Card from "../components/card/card";
import Stack from "../components/stack/stack";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import GlowButton from "../components/glowbutton/glowbutton";
import Herobanner from "../components/herobanner/herobanner";

const OffresPage: React.FC<PageProps> = ({ data }: PageProps) => {
  return (
    <Layout>
      <Herobanner>
        <h1 className="herobanner__title" style={{ margin: "2rem 0" }}>
          Quelle type d'entreprise <br />
          êtes-vous ?
        </h1>
        <Stack gap={2} position="center" direction="horizontal">
          <GlowButton as="a" to="/offres/entreprise">
            TPE ou PME
          </GlowButton>
          <GlowButton as="a" to="/offres/association">
            ETI ou grand groupe
          </GlowButton>
        </Stack>
      </Herobanner>
    </Layout>
  );
};

export default OffresPage;

export const Head: HeadFC = () => <SEO title="Offres" />;
