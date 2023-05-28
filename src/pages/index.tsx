import React, { lazy, Suspense } from "react";
import "./index.scss";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import HeroBanner from "../components/herobanner/herobanner";
import Stack from "../components/stack/stack";
import GlowButton from "../components/glowbutton/glowbutton";
import { graphql, PageProps } from "gatsby";

const LazyIndexBottom = lazy(
  () => import("../components/indexbottom/indexbottom")
);

const IndexPage = ({ data }: { data: PageProps<Queries.LottieFilesQuery> }) => {
  // change lottie files list to object with name as key
  const lottieFiles = data.allFile.nodes.reduce((acc, node) => {
    acc[node.name] = node.publicURL;
    return acc;
  }, {} as { [key: string]: string });

  return (
    <Layout className="home">
      <SEO title="Home" />
      <HeroBanner
        words={[
          "Performance",
          "Créativité",
          "Ergonomie",
          "SEO",
          "Design",
          "Photographie",
          "UI/UX",
          "Marketing",
          "Développement",
        ]}
      >
        <h1 className="herobanner__title">
          Agence spécialisée dans l'ultra performance
        </h1>
        <h2 className="herobanner__subtitle">
          Vous souhaitez mettre toutes les chances de votre côté pour convertir
          un maximum de prospects ?
        </h2>
        <h3 className="herobanner__subtitle">
          Nous vous créons un site ultra rapide et optimisé pour le SEO !
        </h3>
        <Stack
          direction="horizontal"
          position="center"
          gap={5}
          style={{ marginTop: "3rem" }}
        >
          <GlowButton as="Link" to="contact/">
            Je veux un site
          </GlowButton>
          <GlowButton as="Link" to="about/">
            En savoir plus
          </GlowButton>
        </Stack>
      </HeroBanner>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyIndexBottom lottieFiles={lottieFiles} />
      </Suspense>
    </Layout>
  );
};

export const Head = () => <SEO title="Home" />;

export const query = graphql`
  query LottieFiles {
    allFile(filter: { sourceInstanceName: { eq: "lottie" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`;

export default IndexPage;
